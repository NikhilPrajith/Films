import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Content from "../components/Content/Content"
import detailRequest from '../utils.js/detailRequest'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from "../components/Navbar/Navbar"
import HighlightedContent from '../components/Content/HighlightedContent'

export default function Home({message,results}) {
    console.log("Message",message)
    console.log("About",results);
    return (
        <div>
        <div style={{maxHeight:'800px',overflow:'hidden'}} className="flex">
            <Sidebar/>
            <div>Hello</div>
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
            results:data,
        },
    }
}
