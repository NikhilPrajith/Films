import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./TopRated.module.css"
import { useEffect, useRef,useState } from "react"
import { useRouter } from "next/router"

function DisplayVideo({videos,movies}) {
  const [data,setData] = useState(null)
  const router = useRouter();
  useEffect(()=>{
    const tryFetchingData = async () => {
      var filterSet = ['Trailer'];
      const filteredVideos = videos.filter(({
          type
      }) => filterSet.includes(type));

      setData(`https://www.youtube.com/embed/${filteredVideos[0].key}`)
      
    }
    tryFetchingData()
    return () => {
      // this now gets called when the component unmounts
    }

  },[videos]);
  const cutDownOverviewe =(overview) =>{
    if(overview.length>250){
        return overview.slice(0,250)+"..."
    }
    return overview
  }

  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>This Week</div>
      <div>
        <iframe
          width="100%"
          height="220"
          style={{borderRadius:'8px',overflow:'hidden',background:`url(${`https://image.tmdb.org/t/p/w500/${movies[0].backdrop_path||movies[0].poster_path}`})`}}
          src={data}
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />{" "}
        <div style={{color:'grey',fontSize:'14px',paddingTop:'10px'}}>{cutDownOverviewe(`${movies[0].overview || "Overview currently not available"}`)}</div>
      </div>
      <div>
      <div style={{paddingTop:'25px',marginTop:'25px',marginBottom:'20px',borderTop:'0.9px rgba(83, 83, 83, 0.63) solid'}} className={styles.title}>Top Rated</div>
        {movies.slice(0,10).map((movie, index) => {
          return (
            <div onClick={()=> router.push(`/about/?id=${movie.id}`)} key={index}>
              <div className={styles.topParent}>
                <div>{index+1}.</div>
                <div>{movie.title||movie.original_title}</div>
                <div>{`${movie.release_date}`.slice(0,4)}</div>
              </div>
            </div>
          );
        })}
      </div>
          

    </div>
    </>
  )
}

export default DisplayVideo
//https://www.youtube.com/watch?v=P9mwtI82k6E
//{"iso_639_1":"en","iso_3166_1":"US","name":"The Shawshank Redemption (1994) 
//OFFICIAL TRAILER [HD 1080p]","key":"P9mwtI82k6E","site":"YouTube","size":1080,
//"type":"Trailer","official":false,"published_at":"2020-02-18T16:17:17.000Z","id":"62e33568b0040a006cbfe89b"}