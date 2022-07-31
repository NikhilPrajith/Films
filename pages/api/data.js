// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import requests from "../../utils.js/requests"
const baseUrl=`https://api.themoviedb.org/3/`;
export default async function handler(req, res) {
    console.log("kaksskadkasdkasidjasdijda")
    if (req.method == 'POST'){
        console.log("Correct request")
        if(!("pageNumber" in req.body) || !("type" in req.body)){
            console.log("No proper data")
            res.status(404).json({ message:"No page number provided", data: [] })
        }
        const type = req.body.type
        const pageNumber = req.body.pageNumber +1
        console.log("Page Number",pageNumber)
        const url = `https://api.themoviedb.org/3/${type}${requests.Discover.url}`+`&page=${pageNumber}`;
        console.log("URL",url)
        const gatherData = await fetch(url)
        const data = await gatherData.json()
        if(data.status_code == 401 || data.status_code == 404 || !data.success){
            console.log("Failed",data)
            res.status(400).json({ message:data.status_message,data: []})
            return
        }else{
            console.log("Found new data set")
            console.log("new")
            const results = data.results
            console.log(results)
            console.log("------")
            res.status(200).send({ message:'Successful',results: "ok"})
            return 
        }
    }else{
        res.status(404).json({ message:"Wrong request type", data: [] })
    }

  }
  