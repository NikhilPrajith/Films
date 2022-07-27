const API_KEY = process.env.API_KEY;

export default{
    Discover:{
        title:'Discover',
        url:`/popular?api_key=${API_KEY}`
    },
    New:{
        title:'New',
        url:`/now_playing?api_key=${API_KEY}`
    },
    Popular:{
        title:'Popular',
        url:`/top_rated?api_key=${API_KEY}`
    },
    Upcoming:{
        title:'Trending',
        url:`/upcoming?api_key=${API_KEY}`
    },
}