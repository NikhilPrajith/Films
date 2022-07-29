import React, { useEffect, useRef, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';
import {RiArrowDropDownLine} from 'react-icons/ri'


const Navbar = () => {
    const router = useRouter();
    return (
        <div className={styles.nav} style={{backgroundColor:'white',width:'100%',zIndex:'99'}}>
            <div className={styles.choices}>
                <div className={styles.categories}>
                    <div>Categories<RiArrowDropDownLine></RiArrowDropDownLine></div>
                    <div>Year<RiArrowDropDownLine></RiArrowDropDownLine></div>
                </div>
                <div>
                    <input className={styles.input} type="text" id="searc" name="search" placeholder="Search whats on your mind..."></input>
                </div>
                <div style={{textAlign:'end',display:'flex',justifyContent:'flex-end'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Region<RiArrowDropDownLine></RiArrowDropDownLine></div>
                </div>

            </div>

        </div>
    );

}

export default Navbar;