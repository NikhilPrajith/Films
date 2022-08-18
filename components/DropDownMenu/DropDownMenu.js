import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./DropDownMenu.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';
import {AiOutlineCopyright} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'


const DropDownMenu = ({title, urlTitles,page,regions,extrasMovies,extrasTv}) => {
    const router = useRouter();
    
    useEffect(()=>{
    })
    const processTitle = (word)=>{
        if(word.substring(word.length-5) == "Shows"){
            return word.substring(0,word.length-5)
        }
        if(word.substring(word.length-6) == "Movies"){
            return word.substring(0,word.length-6)
        }
        return word
    }
    return (
        <div className={styles.dropdown}>
            <button className={styles.button}>{title}<RiArrowDropDownLine></RiArrowDropDownLine></button>
            <div className={styles.dropDownContent}>
                <div>
                    <div className={styles.splitTitle}>Categories</div>
                    {urlTitles.map((titleA,index)=>{
                        return(<a className={styles.aTag} onClick={()=>{router.push(`/${page}?field=${urlTitles[index]}`)}}>{processTitle(titleA)}</a>)
                    })}
                </div>
                <div>
                    <div>
                        <div className={styles.splitTitle}>Popular Terms</div>
                        {regions.map((region,index)=>{
                            return(<a className={styles.aTag} onClick={()=>{router.push(`/${page}?field=${regions[index]}`)}}>{processTitle(region)}</a>)
                        })}
                    </div>
                </div>
                <div  className={styles.columnThree}>
                    <div className={styles.splitTitle}>Genres</div>
                    <div style={{display:'flex'}}>
                        
                        <div style={{width:'100%'}}>
                            <div style={{paddingLeft:'20px',paddingBottom:'20px', fontSize:'10px'}}>TV</div>
                        {extrasTv.map((title,index)=>{
                            return(<a className={styles.aTag} onClick={()=>{router.push(`/${page}?field=${extrasTv[index]}`)}}>{processTitle(title)}</a>)
                        })}
                        </div>
                        <div style={{width:'100%'}}>
                            <div style={{paddingLeft:'20px',paddingBottom:'20px', fontSize:'10px'}}>Movies</div>
                        {extrasMovies.map((title,index)=>{
                            return(<a className={styles.aTag} onClick={()=>{router.push(`/${page}?field=${extrasMovies[index]}`)}}>{processTitle(title)}</a>)
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DropDownMenu;