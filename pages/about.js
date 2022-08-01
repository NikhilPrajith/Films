import Head from 'next/head'
import Content from "../components/Content/Content"
import detailRequest from '../utils.js/detailRequest'
import requests from '../utils.js/requests'
import Navbar from '../components/NavbarA/Navbar'
import HighlightedContent from '../components/Content/HighlightedContent'
import styles from '../styles/about.module.css'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'


export default function Home({message,result,videos}) {
    console.log("About",result,videos);

    if(message == "Empty"){
        return (
            <div styel={{width:'100vh',height:'100vh'}}>
                <div>No data present!</div>
                <div>Please check back later!</div>
            </div>
        );
    }


    const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const Background = `${BASE_URL}${result.backdrop_path}`||
    `${BASE_URL}${result.poster_path}`
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.container}>
                <div className={styles.title}>{result.original_title||result.original_name}</div>
                <div className={styles.tagline}>"{result.tagline}"</div>
                <div className={styles.details}>
                    <div className={styles.imageContainer}>
                        <Image 
                            quality={100}
                            layout='responsive'
                            src={Background}
                            height={1080}
                            width={1920}
                            />
                    </div>
                    <div className={styles.overviewContainer}>
                        <div className={styles.overviewTitle}>{result.original_title || result.original_name} </div>
                        <div className={styles.status}>Status: {result.status}</div>
                        <div className={styles.date}>{result.first_air_date || result.release_date}</div>
                        <div className={styles.date}>
                            {result.genres.map((genre,index) => (
                                <span>{genre.name}{index != result.genres.length-1?', ':''} </span>
                            ))}
                        </div>
                        <div className={styles.overview}>{result.overview}</div>
                        <div style={{cursor:'pointer',color:'#29b6f6'}}><a target="_blank" href={`${result.homepage}`}>Learn More</a></div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    )
}

//for server side, we get something called context which allow to show the url the client came from 
//this is the content that is rendered in the server
export async function getServerSideProps(context){
    const id = context.query.id || "None"
    console.log("IDDDNJSDJNSAJD",id)
    console.log()
    const type = context.query.type||"movie"
    console.log("TYPEEWDEFWE",type)

    const apiUrl = await detailRequest({id,type})
    const videoUrl = `https://api.themoviedb.org/3/${type}/${id}${requests.GetVideo.url}`
    const urls = [
        apiUrl,videoUrl
    ];

    var request;
    var message;
    var results;
    var videos;
    if(apiUrl !="Empty"){
        [results,videos] = await Promise.all(
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
            videos:videos.results
        },
    }
}
