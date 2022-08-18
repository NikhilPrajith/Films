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
    TVShows:{
        title:'TV Shows',
        url:`/tv/popular?api_key=${API_KEY}`
        
    },
    Kdrama:{
        title:'Korean Shows',
        url:`/tv/popular?api_key=${API_KEY}&with_origin_country=KR`
    },
    GermanShows:{
        title:'German Shows',
        url:`/tv/popular?api_key=${API_KEY}&with_origin_country=DE`
    },

    HorrorMovies:{
        title:'Horror Movies',
        url:`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=27`
    },
    ThrillerMovies:{
        title:'Thriller Movies',
        url:`/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=53`
    },
    ActionMovies:{
        title:'Action Movies',
        url:`/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=28`
    },


    RomanticShows:{
        title:'Romantic Shows',
        url:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=10749&language=en-US`
    },
    MysteryShows:{
        title:'Mystery Shows',
        url:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=9648`
    },
    FamilyShows:{
        title:'Family Shows',
        url:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=10751`
    },
    AnimationShows:{
        title:'Animation',
        url:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=16`
    },
    DramaShows:{
        title:'Drama Shows',
        url:`/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&include_adult=false&with_genres=18`
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
