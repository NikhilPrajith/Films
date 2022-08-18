import React, { useEffect, useRef, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useRouter } from 'next/router'
import styles from "./Navbar.module.css";
import { FaHome,FaDiscover, FaBook,FaFire,FaNew,FaClock } from 'react-icons/fa';
import {RiArrowDropDownLine} from 'react-icons/ri'
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import axios from "axios";


const Navbar = ({urlTitles,url}) => {
    const router = useRouter();
    const [addShadow, setAddShadow] = useState(false);
    const [searchResults,setSearchResults] = useState([])
    const [focused, setFocused] = useState(false)
    const [contentMouseOver, setContentMouseOver] = useState(false)

    const onFocus = () => {
        setFocused(true)
        
    }
    const onBlur = () => {
        if(!contentMouseOver){
            setFocused(false)
        }
    }


    const changeNavbarStyle = () =>{
        if(window.scrollY >= 80){
            setAddShadow(true);
        }
        else{
            setAddShadow(false);
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', changeNavbarStyle);

       
    })

    const changed = async (evt)=>{
        const {data} = await axios.post(`/api/search`,{query:evt.target.value})
        setSearchResults(data.results)

    }
    return (
        <div className={addShadow?styles.navWithShadow: styles.nav}>
            <div className={styles.choices}>
                <div className={styles.categories}>
                    <div className={styles.home} onClick={()=>{router.push("/")}}>Home</div>
                    <div className={styles.filter} ><DropDownMenu title="Filter" urlTitles={["Upcoming","Popular","New","TVShows"]} regions={['Kdrama',"GermanShows"]}
                        extrasMovies={["HorrorMovies","ThrillerMovies","ActionMovies"]} extrasTv={["RomanticShows","MysteryShows","FamilyShows","AnimationShows","DramaShows"]} page="category" ></DropDownMenu></div>
                    {/*<div>Year<RiArrowDropDownLine></RiArrowDropDownLine></div>*/}
                </div>
                <div className={styles.dropdown}>
                    <div style={{margin:'auto',width:'100%'}}><input onFocus={onFocus} onBlur={onBlur} onChange={(evt)=>{changed(evt)}} className={styles.input} type="text" id="searc" name="search" placeholder="Search whats on your mind..."></input></div>
                    <div onMouseEnter={()=>{setContentMouseOver(true)}} onMouseLeave={()=>{setContentMouseOver(false)}} style={{display:`${(focused)?"block":"none"}` }} className={styles.dropDownContent}>
                        {searchResults.map((result,index)=>{
                            return(<div className='cursor-pointer hover:bg-slate-300 px-4' onClick={()=>{router.push(`${result.media_type == 'person'?`/person/?id=${result.id}}`:`/about/?id=${result.id}&type=${result.media_type}`}`),setFocused(false)}}>{result.name || result.original_title}</div>)
                        })}
                    </div>
                </div>
                <div className={styles.placeHolderDiv} >
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}></div>
                </div>

            </div>


        </div>
    );

}

export default Navbar;