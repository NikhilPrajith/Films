import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Sidebar.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';


const Sidebar = () => {
    const router = useRouter();
    return (
        <div style={{backgroundColor:'rgba(20, 20, 20, 0.89)',width:'15%',padding:'10px 100px 0px 30px'}}>
            <div className={styles.topic}>MENU</div>
            <div className={styles.choices}>
                <a onClick={()=> router.push(`/`)}><FaHome style={{marginRight:'10px'}}/>Home</a>
                <a onClick={()=> router.push(`/?genre=${"Discover"}`)}> <FaBook style={{marginRight:'10px'}}/>Discover</a>
                <a onClick={()=> router.push(`/?genre=${"Popular"}`)}><FaFire style={{marginRight:'10px'}}/>Popular</a>
                <a onClick={()=> router.push(`/?genre=${"New"}`)}><FaClock style={{marginRight:'10px'}}/>New</a>
            </div>

        </div>
    );

}

export default Sidebar;