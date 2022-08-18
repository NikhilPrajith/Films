import Head from 'next/head'
import Content from "../components/Content/Content"
import {getCredits,detailRequest,getRecommendations} from '../utils.js/detailRequest'
import requests from '../utils.js/requests'
import Navbar from '../components/NavbarA/Navbar'
import HighlightedContent from '../components/Content/HighlightedContent'
import styles from '../styles/about.module.css'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import PeopleContent from '../components/Content/PeopleContent'
import {AiTwotoneStar} from "react-icons/ai"
import { useEffect, useState } from 'react'
import PosterContent from"../components/Content/PosterContent"



export default function Home({message,result,videos,credits, recommendations}) {
    const [videoPointer,setVideoPointer] = useState(6)
    const [filteredRec, setFilteredRec]= useState([]);
    if(message == "Empty"){
        return (
            <div styel={{width:'100vh',height:'100vh'}}>
                <div>No data present!</div>
                <div>Please check back later!</div>
            </div>
        );
    }
    const getMoreResults = async ()=>{
        setVideoPointer(videoPointer+3) 
    }
    useEffect(()=>{
        var filtered =  recommendations.filter(function(content) {
            return (content.backdrop_path != null || content.poster_path !=null);
        });
        setFilteredRec(filtered)
          
    },[recommendations])


    const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const Background = `${BASE_URL}${result.backdrop_path || result.poster_path}`||
    `${BASE_URL}${result.poster_path}`

    const posterOrder = `${BASE_URL}${result.poster_path}`||
    `${BASE_URL}${result.backdrop_path}`
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.container}>
                <div className={styles.title}>{result.original_title||result.original_name}</div>
                <div className={styles.tagline}>"{result.tagline}"</div>
                <div className={styles.details}>
                    <div className={styles.imageContainer} style={{backgroundPosition:'center',backgroundSize:'cover'}}>
                    {Background &&(<Image 
                            quality={100}
                            layout='responsive'
                            src={Background}
                            height={980}
                            width={1920}
                            />)}
                    </div>
                    <div className={styles.overviewContainer}>
                        <div className={styles.overviewTitle}>{result.original_title || result.original_name} </div>
                        <div className={styles.status}>Status: {result.status}</div>
                        <div className={styles.date}>{result.first_air_date || result.release_date}</div>
                        <div className={styles.date}>
                            {result.genres.map((genre,index) => (
                                <span>{genre.name}{index != result.genres.length-1?",  ":''} </span>
                            ))}
                        </div>
                        <div className={styles.rating}><AiTwotoneStar color="#ffd700" style={{paddingRight:'4px'}}></AiTwotoneStar>{result.vote_average}</div>
                        <div className={styles.overview}>{result.overview}</div>
                        {result.homepage &&(<div style={{cursor:'pointer',color:'#29b6f6'}}><a target="_blank" href={`${result.homepage}`}>Learn More</a></div>)}
                    </div>
                </div>
                <PeopleContent results={credits.cast} type="cast"></PeopleContent>
                {videos.length>0 &&(<div className={styles.trailerAndClips}>Trailer and Clips:</div>)}
                {videos.length>0 &&(<div style={{width:'100%'}} className="sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                    {videos.slice(0,videoPointer).map((video,index) => (
                        <div style={{display:'flex',marginBottom:'50px',minHeight:'230px'}}>
                            <div style={{width:'90%'}}>
                                <iframe
                                    width="100%"
                                    height='100%'
                                    style={{borderRadius:'8px',overflow:'hidden',background:`url(${`https://image.tmdb.org/t/p/w500/${posterOrder}`})`}}
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    allow="autoplay; encrypted-media;fullscreenx"
                                    allowfullscreen
                                    title="video"
                                    />{" "}
                            </div>
                            
                        </div>
                    ))}
                </div>)}
                {videoPointer+3<videos.length+3 && <div onClick={getMoreResults} style={{cursor:'pointer',color:'#29b6f6',textAlign:'center',marginBottom:'30px'}}>Load More</div>}
                {filteredRec.length>0 && (
                    <div>
                        <div className={styles.trailerAndClips}>Recommended</div>
                        <div>
                            <PosterContent type="NoHeader" results={filteredRec}></PosterContent>
                        </div>
                    </div>)}
            </div>
            <Footer></Footer>

        </div>
    )
}
export async function getServerSideProps(context){
    const id = context.query.id || "None"
    const type = context.query.type||"movie"
    const apiUrl = await detailRequest({id,type})
    const videoUrl = `https://api.themoviedb.org/3/${type}/${id}${requests.GetVideo.url}`
    const creditUrl = await getCredits({id,type})
    const getRec = await getRecommendations({id,type})
    const urls = [
        apiUrl,videoUrl,creditUrl,getRec
    ];

    var request;
    var message;
    var results;
    var videos;
    var credits;
    var getRecResult
    if(apiUrl !="Empty"){
        [results,videos,credits,getRecResult] = await Promise.all(
            urls.map((url) => fetch(url).then((res) => res.json()))
        );
        message = "Data present"
    }else{
        message="No input"
    }
    return {
        props:{
            message:message,
            result:results,
            videos:videos.results,
            credits:credits,
            recommendations:getRecResult.results
        },
    }
}
