import Image from "next/image"
import styles from "./DisplayCard.module.css"
import Link from "next/link"



const DisplayCard = ({ result,type }) =>{
    const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

    switch(type){
        case "showCase":
            return (
                <div className={`p-2 group cursor-pointer ${styles.parent2}`}>
                    <div style={{overflow:'hidden',width:'700px'}}>
                        <Image 
                            layout='fill'
                            quality={100}
                            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`||
                                `${BASE_URL}${result.poster_path}` }
                            style={{borderTopLeftRadius:'25px',borderTopRightRadius:'25px'}}
                            />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name2}>{result.title || result.original_name}</div>
                        <div className={styles.year2}>{`${result.release_date}`.slice(0,4)}</div>
                        <div className={styles.viewButton2}><Link href=""><a>Read More</a></Link></div>
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
                        <div className={styles.viewButton}><Link href=""><a>View</a></Link></div>
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