
async function detailRequest({id,type}) {
    const API_KEY = process.env.API_KEY;
    console.log("Entered")
    if(id =="None"){
        console.log("Detailed","none")
        return "Empty View"
    }else{
        const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
        console.log("From detailed", url)
        return url
    }
}
//url = `https://api.themoviedb.org/3/movie/438148?api_key=40ab831924caccbd8260359b94ef4301`
export default detailRequest