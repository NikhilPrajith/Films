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
import Router, { useRouter } from 'next/router'


export default function Category({results}) {
    
    return (
        <div>
            <Navbar></Navbar>
            <div style={{margin:'60px',marginTop:'160px'}}>
                <Content results={results.slice(0,20)}></Content>) 
            </div>
            <Footer></Footer>

        </div>
    )
}

export async function getServerSideProps(context){
    
}
