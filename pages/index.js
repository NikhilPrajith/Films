import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Content from "../components/Content/Content"
import requests from '../utils.js/requests'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from "../components/Navbar/Navbar"
import HighlightedContent from '../components/Content/HighlightedContent'

export default function Home({results}) {
  console.log(results);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{maxHeight:'800px',overflow:'hidden'}} className="flex">
        <Sidebar/>
        <div style={{width:'100%',overflowY:'scroll',overflowX:'hidden'}}>
          <Navbar/>
          <HighlightedContent results={results.slice(0,3)}></HighlightedContent>
          <Content results={results.slice(3)}></Content>
        </div>
      </div>

    </div>
  )
}

//for server side, we get something called context which allow to show the url the client came from 
//this is the content that is rendered in the server
export async function getServerSideProps(context){
  const genre = context.query.genre
  const type = context.query.type || "movie"
  console.log("type",type)
  const request = await fetch(
    `https://api.themoviedb.org/3/${type}${requests[genre]?.url || requests.Upcoming.url}`
  ).then(res => res.json());

  return {
    props:{
      results:request.results,
    },
  }
}
