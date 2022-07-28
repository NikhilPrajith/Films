import Image from "next/image"
import styles from "./DisplayCard.module.css"
import Link from "next/link"
import { useRouter } from "next/router"



const DisplayCard = ({ result,type }) =>{
    const router = useRouter();
    const BASE_URL = 'https://image.tmdb.org/t/p/w500/';
    const Background = `${BASE_URL}${result.poster_path||result.backdrop_path}`||
    `${BASE_URL}${result.poster_path}`
    switch(type){
        case "showCase":
            return (
                <div className={`p-2 group cursor-pointer ${styles.parent2}`}>
                    <div style={{border:'0.5px black solid', borderTopLeftRadius:'25px',borderTopRightRadius:'25px',overflow:'hidden',width:'600px',height:'100%', backgroundImage:`url(${Background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                        {/*}
                        <Image 
                            layout='fill'
                            quality={100}
                            src={`${BASE_URL}${result.poster_path||result.backdrop_path}`||
                                `${BASE_URL}${result.poster_path}` }
                            style={{borderTopLeftRadius:'25px',borderTopRightRadius:'25px'}}
            />*/}
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name2}>{result.title || result.original_name}</div>
                        <div className={styles.year2}>{`${result.release_date}`.slice(0,4)}</div>
                        <div style={{alignItems:'center',display:'flex',justifyContent:'space-between'}}>
                            <div>{result.vote_average} rating</div>
                            <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={styles.viewButton2}><a>Read More</a></div>
                        
                        </div>
                        
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