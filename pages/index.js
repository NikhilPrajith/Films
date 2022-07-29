import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Content from "../components/Content/Content"
import requests from '../utils.js/requests'
import Navbar from '../components/NavbarA/Navbar'
import HighlightedContent from '../components/Content/HighlightedContent'
import PosterContent from '../components/Content/PoserContent'

export default function Home({results}) {
  console.log(results);
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{margin:'60px',marginTop:'5px'}}>
        <Navbar/>
        <div style={{width:'100%',overflowX:'hidden',height:'100%',marginTop:'25px'}}>
          <HighlightedContent results={results.slice(0,5)}></HighlightedContent>
          <div style={{display:'flex'}}>
            <div style={{width:'80%'}}>
              <PosterContent results={results.slice(5,12)}></PosterContent>
              {/*<Content results={results.slice(12)}></Content>*/}
            </div>
            <div>
              <div>Text</div>
            </div>
          </div>
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
  const url = `https://api.themoviedb.org/3/${type}${requests[genre]?.url || requests.Upcoming.url}`
  const urls = [
    url, url+'&page=2', url+'&page=3', url+'&page=4'
  ];

  const [result1, result2] = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );
  const combinedData = [...result1.results, ...result2.results] 
  return {
    props:{
      results:combinedData,
    },
  }
}
