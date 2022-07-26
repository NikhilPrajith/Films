import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';


const Navbar = () => {
    const router = useRouter();
    return (
        <div className={`flex ${styles.container}`}>
            <div className={`flex ${styles.typeChoices}`}>
                <a onClick={()=>{router.push(`?type=${"Movie"}`)}}>Movies</a>
                <a onClick={()=>{router.push(`?type=${"Series"}`)}}>Series</a>
                <a onClick={()=>{router.push(`?type=${"tvShows"}`)}}>TV Shows</a>
            </div>

        </div>
    );

}

export default Navbar;