import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./DropDownMenu.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';
import {AiOutlineCopyright} from 'react-icons/ai'
import {RiArrowDropDownLine} from 'react-icons/ri'


const DropDownMenu = ({title, urlTitles,page}) => {
    const router = useRouter();
    
    useEffect(()=>{
    })
    
    return (
        <div className={styles.dropdown}>
            <button className={styles.button}>{title}<RiArrowDropDownLine></RiArrowDropDownLine></button>
            <div className={styles.dropDownContent}>
                {urlTitles.map((titleA,index)=>{
                    return(<a className={styles.aTag} onClick={()=>{router.push(`/${page}?field=${urlTitles[index]}`)}}>{titleA}</a>)
                })}
            </div>
        </div>
    );

}

export default DropDownMenu;