import Head from 'next/head'
import Content from "../components/Content/Content"
import {personData} from '../utils.js/detailRequest'
import requests from '../utils.js/requests'
import Navbar from '../components/NavbarA/Navbar'
import HighlightedContent from '../components/Content/HighlightedContent'
import styles from '../styles/person.module.css'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import PeopleContent from '../components/Content/PeopleContent'
import {AiTwotoneStar} from "react-icons/ai"
import { useEffect, useState } from 'react'
import PosterContent from"../components/Content/PosterContent"



export default function Home({details,credits,taggedImages}) {
    console.log(details,credits,taggedImages)
    const [filteredCred, setfilteredCred]= useState([]);
    if(!details){
        return (
            <div styel={{width:'100vh',height:'100vh'}}>
                <div>No data present!</div>
                <div>Please check back later!</div>
            </div>
        );
    }

    useEffect(()=>{
        var filtered =  credits.filter(function(content) {
            return (content.backdrop_path != null || content.poster_path !=null);
        });
        setfilteredCred(filtered)
          
    },[credits])
    const getMoreResults = async ()=>{
        setVideoPointer(videoPointer+3) 
    }

    const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const Background = `${BASE_URL}${details.profile_path}`
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.container}>
                <div className={styles.title}>{details.name}</div>
                <div className={styles.details}>
                    <div className={styles.imageContainer} style={{backgroundPosition:'center',backgroundSize:'cover'}}>
                        {Background &&(<Image 
                                quality={100}
                                layout='responsive'
                                src={Background}
                                height={480}
                                priority
                                width={420}
                                />)}
                    </div>
                    <div className={styles.overviewContainer}>
                        <div>Birthday: <span style={{color:'grey'}}>{details.birthday}</span></div>
                        <div>Place of Birth: <span style={{color:'grey'}}>{details.place_of_birth}</span></div>
                        <div>Known for: <span style={{color:'grey'}}>{details.known_for_department}</span></div>
                        <div>Biography: </div>
                        <div className={styles.overview}>{details.biography}</div>
                        {details.homepage &&(<div style={{cursor:'pointer',color:'#29b6f6'}}><a target="_blank" href={`${details.homepage}`}>Learn More!</a></div>)}
                        {details.imdb_id &&(<div style={{cursor:'pointer',color:'#29b6f6'}}><a target="_blank" href={`https://www.imdb.com/name/${details.imdb_id}/`}>IMDB Homepage</a></div>)}
                    </div>
                </div>

                {filteredCred.length>0 && (
                <div>
                    <div className={styles.moviesAndShows}>Movies and Shows</div>
                    <div>
                        <PosterContent type="NoHeader" results={filteredCred}></PosterContent>
                    </div>
                </div>)}
                {taggedImages.length>0 &&(<div className={styles.pictures}>Photos:</div>)}
                <div className='sm:grid md:grid-cols-4 xl:grid-cols-7 3xl:flex flex-wrap justify-center'>
                {taggedImages.slice(0,35).map((image,index) => (
                        <div className='mr-5 ' style={{display:'flex',marginBottom:'50px',minHeight:'230px'}}>
                            <div style={{width:'100%'}}>
                                <Image 
                                quality={100}
                                layout='responsive'
                                src={`${BASE_URL}${image.file_path}`}
                                height={480}
                                priority
                                width={420}
                                />
                            </div>
                            
                        </div>
                    ))}
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
    const urls = await personData(id);
    const [details,credits,images] = await Promise.all(
            urls.map((url) => fetch(url).then((res) => res.json()))
    );
    return {
        props:{
            details:details,
            credits:credits.cast,
            taggedImages:images.results,
        },
    }
}
