
import requests from "../../utils.js/requests";
export default async function search(req,res){
    if(req.method == "POST"){
        const text = req.body.query;
        const url = `https://api.themoviedb.org/3${requests['Search'].url}&query=${text}`
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

  