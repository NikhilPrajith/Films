import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';


const Navbar = () => {
    const router = useRouter();
    return (
        <div className='fixed top-0' style={{backgroundColor:'black',width:'100%',padding:'10px 100px 0px 30px',zIndex:'99'}}>
            <div className={styles.choices}>
                <a onClick={()=> router.push(`/`)}><FaHome style={{marginRight:'5px'}}/>Home</a>
                <a onClick={()=> router.push(`/?genre=${"Discover"}`)}> <FaBook style={{marginRight:'5px'}}/>Discover</a>
                <a onClick={()=> router.push(`/?genre=${"Popular"}`)}><FaFire style={{marginRight:'5px'}}/>Popular</a>
                <a onClick={()=> router.push(`/?genre=${"New"}`)}><FaClock style={{marginRight:'5px'}}/>New</a>
            </div>

        </div>
    );

}

export default Navbar;