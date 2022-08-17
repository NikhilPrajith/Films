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
        url:`/top_rated?api_key=${API_KEY}&append_to_response=videos`
    },
    Upcoming:{
        title:'Trending',
        url:`/upcoming?api_key=${API_KEY}`
    },
    PopularPeople:{
        title:'Popular People',
        url:`/person/popular?api_key=${API_KEY}`
    },
    GetVideo:{
        title:'Video',
        url:`/videos?api_key=${API_KEY}&language=en-US`
    },
    Search:{
        title:'Search',
        url:`/search/multi?api_key=${API_KEY}`

    }
}