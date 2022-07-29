import Image from "next/image"
import styles from "./DisplayCard.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import {AiTwotoneStar} from "react-icons/ai"



const DisplayCard = ({ result,type }) =>{
    const router = useRouter();
    const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const Background = `${BASE_URL}${result.backdrop_path||result.poster_path}`||
    `${BASE_URL}${result.poster_path}`

    const PosterPathOrder =`${BASE_URL}${result.poster_path||result.backdrop_path}`
    const generateTitle =(title) =>{
        if(title.length>15){
            return title.slice(0,12)+"..."
        }
        return title
    }

    switch(type){
        case "showCase":
            return (
                <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={`p-2 group cursor-pointer ${styles.parent2}`}>
                    <div style={{borderRadius:'8px',overflow:'hidden',width:'405px',height:'100%', backgroundImage:`url(${Background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name2}>{result.title || result.original_name}</div>
                        <div className={styles.year2}>{`${result.release_date}`.slice(0,4)}</div>
                        <div className={styles.highlighted_rating}><AiTwotoneStar color="#ffd700" style={{paddingRight:'4px'}}></AiTwotoneStar>{result.vote_average}</div>
                        
                        
                    </div>
                </div>
            );
        case "poster":
            return (
                <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={`p-2 group cursor-pointer ${styles.parent3}`}>
                    <div style={{borderRadius:'8px',overflow:'hidden',width:'120px',height:'80%', backgroundImage:`url(${PosterPathOrder})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
                    </div>
                    <div className={styles.text3}>
                        <div className={styles.name3}>{generateTitle(`${result.title || result.original_name}`)}</div>
                        <div className={styles.year3}>{`${result.release_date}`.slice(0,4)}</div>
                        
                        
                    </div>
                </div>
            );
        default:
            {/* Small*/}
            return (
                <div className={`p-2 group cursor-pointer ${styles.parent}`}>
                    <div style={{borderRadius:'10px',overflow:'hidden'}}>
                        <Image 
                            layout='responsive'
                            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`||
                                `${BASE_URL}${result.poster_path}` }
                            height={1080}
                            width={1920}
                            />
                        </div>
                    <div className={styles.text}>
                        <div className={styles.name}>{result.title || result.original_name}</div>
                        <div className={styles.year}>{`${result.release_date}`.slice(0,4)}</div>
                        <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={styles.viewButton}><a>View</a></div>
                    </div>
                </div>
            );
    };
}

export default DisplayCard
/*
<!--
        <Image 
            layout='responsive'
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`||
                `${BASE_URL}${result.poster_path}` }
            height={1080}
            width={1920}
        />-->
*/