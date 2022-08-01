import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Footer.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';
import {AiOutlineCopyright} from 'react-icons/ai'


const Footer = () => {
    const router = useRouter();
    
    useEffect(()=>{
    })
    
    return (
        <div className={styles.footer}>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center',fontWeight:'900',paddingBottom:'10px'}}>2022 Edition</div>    
            <div>Utilizes the movie databse API</div>
            <div>UI design credits: RaDesign Team on dribble.com</div>
            <div>Created by Nikhil Prajith Kumar</div>

        </div>
    );

}

export default Footer;