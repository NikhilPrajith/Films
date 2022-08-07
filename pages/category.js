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
import axios from 'axios'


export default function Category({results,title}) {
    const [pageNumber,setPageNumber] = useState(2)
    const [restOfResultsPointer,setRestOfResultsPointer] =  useState(32)
    const [wholeResultsSet,setResultsSet] = useState(results)
    useEffect(()=>{
    })
    const getMoreResults = async () =>{
        /*
        The moviedb api can be requested here itself. However, I used the api routes of next.js
        to practice using them.
        */
        if(restOfResultsPointer +13>=wholeResultsSet.length){
            const {data} = await axios.post(`/api/data`,{pageNumber:pageNumber,type:'movie',url:title})
            if(data.message == "Successful"){
                setPageNumber(pageNumber+1)
                setResultsSet([...wholeResultsSet, ...data.data]);
                setRestOfResultsPointer(restOfResultsPointer+12);
            }
        }else{
            setRestOfResultsPointer(restOfResultsPointer+12) 
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={{margin:'60px',marginTop:'160px'}}>
                <Content results={wholeResultsSet.slice(0,restOfResultsPointer)} title={title}></Content>
                <div onClick={getMoreResults} style={{cursor:'pointer',color:'#29b6f6',textAlign:'center'}}>Show More</div>
            </div>
            <Footer></Footer>

        </div>
    )
}

//for server side, we get something called context which allow to show the url the client came from 
//this is the content that is rendered in the server
export async function getServerSideProps(context){
    const type = context.query.type||"movie"
    const field = context.query.field;
    const url = `https://api.themoviedb.org/3/${type}${requests[context.query.field].url}`
    console.log("Category URl",url)
    const urls = [
        url, url+'&page=2'
    ];
    
    const [result1, result2] = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
    );
    const combinedData = [...result1.results, ...result2.results]

    return {
        props:{
            results:combinedData,
            title:field
        },
    }
}
