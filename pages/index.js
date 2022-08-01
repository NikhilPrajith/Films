import Head from 'next/head'
import Content from "../components/Content/Content"
import requests from '../utils.js/requests'
import Navbar from '../components/NavbarA/Navbar'
import HighlightedContent from '../components/Content/HighlightedContent'
import PosterContent from '../components/Content/PoserContent'
import DetailedContent from '../components/Content/DetailedContent'
import TopRated from '../components/TopRated/TopRated'
import PeopleContent from '../components/Content/PeoplContent'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../components/Footer/Footer'

export default function Home({results,topRated,topPeople,firstTopRatedVideo}) {
  //Set to two as we gather two pages on data before rendering
  const [pageNumber,setPageNumber] = useState(2)
  const [restOfResultsPointer,setRestOfResultsPointer] =  useState(33)
  const [wholeResultsSet,setResultsSet] = useState(results)
  console.log(topPeople)
  useEffect(()=>{
  })
  const getMoreResults = async () =>{
    /*
      The moviedb api can be requested here itself. However, I used the api routes of next.js
      to practice using them.
    */
    if(restOfResultsPointer +8>=wholeResultsSet.length){
      const {data} = await axios.post(`/api/data`,{pageNumber:pageNumber,type:'movie'})
      if(data.message == "Successful"){
        setPageNumber(pageNumber+1)
        setResultsSet([...wholeResultsSet, ...data.data]);
        setRestOfResultsPointer(restOfResultsPointer+4);
      }
    }else{
      setRestOfResultsPointer(restOfResultsPointer+4) 
    }
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{margin:'60px',marginTop:'5px'}}>
        <Navbar/>
        <div style={{width:'100%',overflowX:'hidden',height:'100%',marginTop:'100px'}}>
          <HighlightedContent results={results.slice(0,7)}></HighlightedContent>
          <div style={{display:'flex',marginTop:'45px',justifyContent:'space-between'}}>
            <div style={{width:'66%'}}>
              <PosterContent results={results.slice(8,25)}></PosterContent>
              <DetailedContent result={results[0]}></DetailedContent>
              <PeopleContent results={topPeople.slice(0,10)}></PeopleContent>
              <PeopleContent results={topPeople.slice(10)} type='noTitle'></PeopleContent>
            </div>
            <div style={{width:'34%',paddingLeft:'68px'}}>
              <TopRated videos={firstTopRatedVideo} movies={topRated}></TopRated>
            </div>
          </div>
          <div>
            {/*The 25 was set based on the slicing done earlier */}
            <Content results={wholeResultsSet.slice(25,restOfResultsPointer)}></Content>
            <div onClick={getMoreResults} style={{cursor:'pointer',color:'#29b6f6',textAlign:'center'}}>Show More</div>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </div>
  )
}

//server side rendering. Getting of props from api
//https://api.themoviedb.org/3/movie/725201/videos?api_key=40ab831924caccbd8260359b94ef4301&language=en-US

export async function getServerSideProps(context){
  const genre = context.query.genre
  const type = context.query.type || "movie";
  const url = `https://api.themoviedb.org/3/${type}${requests.Discover.url}`;
  const topRatedUrl =`https://api.themoviedb.org/3/${type}${requests.Popular.url}`;
  const topPeopleUrl = `https://api.themoviedb.org/3${requests.PopularPeople.url}`;

  const urls = [
    url, url+'&page=2', topRatedUrl,topPeopleUrl
  ];

  const [result1, result2,topRated,topPeople] = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );
  const topRatedResults = topRated.results

  const videoUrl = `https://api.themoviedb.org/3/${type}/${topRatedResults[0].id}${requests.GetVideo.url}`
  const res = await fetch(videoUrl)
  const videoData = await res.json()
  //const videoData= await fetch(`https://api.themoviedb.org/3${topRated.results[0]}${requests.GetVideo.url}`).then((res)=>res.json())
  const combinedData = [...result1.results, ...result2.results] 
  return {
    props:{
      results:combinedData,
      topRated:topRatedResults,
      topPeople:topPeople.results,
      firstTopRatedVideo: videoData.results
    },
  }
}
