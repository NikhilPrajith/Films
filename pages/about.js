import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Content from "../components/Content/Content"
import detailRequest from '../utils.js/detailRequest'
import Navbar from '../components/NavbarA/Navbar'
import HighlightedContent from '../components/Content/HighlightedContent'
import styles from '../styles/about.module.css'
import Image from 'next/image'


export default function Home({message,result}) {
    console.log("About",result);
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
            <div style={{width:'100%',height:'100%'}} className="flex">
                <div className={styles.content}>
                    <div>
                        <Image 
                            layout='responsive'
                            src={`${Background}`}
                            height={1080}
                            width={1920}
                        />
                    </div>
                    <div>
                        <div>{result.original_title}</div>
                        <div>{result.overview}</div>

                    </div>
                </div>
            </div>

        </div>
    )
}

//for server side, we get something called context which allow to show the url the client came from 
//this is the content that is rendered in the server
export async function getServerSideProps(context){
    const id = context.query.id || "None"
    console.log("type",id)
    const apiUrl = await detailRequest({id});
    var request;
    var message;
    var data;
    if(apiUrl !="Empty"){
        request = await fetch(apiUrl);
        data = await request.json()
        message = "Data present"
    }else{
        message="No input"
    }
    return {
        props:{
            message:message,
            result:data,
        },
    }
}
