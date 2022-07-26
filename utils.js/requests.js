const API_KEY = process.env.API_KEY;

export default{
    Discover:{
        title:'Discover',
        url:`/movie/popular?api_key=${API_KEY}`
    },
    New:{
        title:'New',
        url:`/movie/now_playing?api_key=${API_KEY}&language=en-US`
    },
    Popular:{
        title:'Popular',
        url:`/movie/top_rated?api_key=${API_KEY}`
    },
    Upcoming:{
        title:'Trending',
        url:`/movie/upcoming?api_key=${API_KEY}`
    },
}