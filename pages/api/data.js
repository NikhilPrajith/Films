// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import requests from "../../utils.js/requests"
const baseUrl=`https://api.themoviedb.org/3/`;
export default async function handler(req, res) {
    if (req.method == 'POST'){
        if(!("pageNumber" in req.body) || !("type" in req.body)){
            res.status(404).json({ message:"No page number provided", data: [] })
        }
        const type = req.body.type
        
        const pageNumber = req.body.pageNumber +1
        const url = `https://api.themoviedb.org/3${type}${requests[req.body.url].url||requests.Discover.url}`+`&page=${pageNumber}`;
        const gatherData = await fetch(url)
        const data = await gatherData.json()
        if(data.status_code == 401 || data.status_code == 404 || data.status_code == 7){
            res.status(400).json({ message:data.status_message,data: []})
            return
        }
        const results = data.results
        res.status(200).json({ message:'Successful',data: results})
             
    }else{
        res.status(404).json({ message:"Wrong request type", data: [] })
    }

  }