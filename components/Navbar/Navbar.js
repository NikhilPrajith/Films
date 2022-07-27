import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';


const Navbar = () => {
    const router = useRouter();
    return (
        <div className={`flex ${styles.container}`}>
            <div className={`flex ${styles.typeChoices}`}>
            </div>

        </div>
    );

}

export default Navbar;