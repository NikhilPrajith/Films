
const API_KEY = process.env.API_KEY;
export async function detailRequest({id,type}) {
    
    if(id =="None"){
        return "Empty View"
    }else{
        const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
        return url
    }
}

export async function getCredits({id,type}){
    if(id =="None"){
        return "Empty View"
    }else{
        const url = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}`
        return url
    }
}
export async function getRecommendations({id,type}){
    if(id =="None"){
        return "Empty View"
    }else{
        const url = `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}`
        return url
    }

}

export async function personData(id){
    return [`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`,
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}`,
    `https://api.themoviedb.org/3/person/${id}/tagged_images?api_key=${API_KEY}`
    ]
}