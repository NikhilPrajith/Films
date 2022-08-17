
import requests from "../../utils.js/requests";
export default async function search(req,res){
    console.log("ASS")
    if(req.method == "POST"){
        console.log(req.body)
        const text = req.body.query;
        console.log(text)
        const url = `https://api.themoviedb.org/3${requests['Search'].url}&query=${text}`
        console.log("search URl",url)
        const urls = [
            url, url+'&page=2'
        ];
        
        const [result1, result2] = await Promise.all(
            urls.map((url) => fetch(url).then((res) => res.json()))
        );
        const combinedData = [...result1.results, ...result2.results]

        res.status(200).json({results:combinedData}) 
    }else{
        res.status(404).json({ message:"Wrong request type", data: [] })
    }
}

  