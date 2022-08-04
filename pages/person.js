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
    if(!details){
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

    const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const Background = `${BASE_URL}${details.profile_path}`
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.container}>
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
            credits:credits,
            taggedImages:images,
        },
    }
}
