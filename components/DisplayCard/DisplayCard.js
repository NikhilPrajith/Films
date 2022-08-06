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
    const ProfilePath = `${BASE_URL}${result.profile_path}`
    const generateTitle =(title,length) =>{
        if(title.length>length){
            return title.slice(0,length-3)+"..."
        }
        return title
    }
    const cutDownOverviewe =(overview) =>{
        if(overview.length>350){
            return overview.slice(0,350)+"..."
        }
        return overview
    }
    

    switch(type){
        case "showCase":
            return (
                <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={`p-2 group cursor-pointer ${styles.showCaseParent2}`}>
                    <div style={{borderRadius:'8px',overflow:'hidden',width:'405px',height:'100%', backgroundImage:`url(${Background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name2}>{result.title || result.original_title}</div>
                        <div className={styles.year2}>{`${result.release_date}`.slice(0,4)}</div>
                        <div className={styles.highlighted_rating}><AiTwotoneStar color="#ffd700" style={{paddingRight:'4px'}}></AiTwotoneStar>{result.vote_average}</div>
                        
                        
                    </div>
                </div>
            );
        case "poster":
            return (
                <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={`p-2 group cursor-pointer ${styles.posterParent3}`}>
                    <div style={{position:'relative',borderRadius:'5px',overflow:'hidden',width:'110px',height:'80%', backgroundColor:`black`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
                        <Image 
                            quality={100}
                            layout='fill'
                            src={PosterPathOrder}
                            style={{width:'100%',height:'100%'}}
                            priority
                            />
                    </div>
                    <div className={styles.text3}>
                        <div className={styles.name3}>{generateTitle(`${result.title || result.original_title}`,18)}</div>
                        <div className={styles.year3}>{`${result.release_date}`.slice(0,4)}</div>
                        
                        
                    </div>
                </div>
            );
        case "detailed":
            return (
                <div className={`p-2 group ${styles.detailedParent4}`}>
                    <div style={{width:'60%',}}>
                        <div style={{borderRadius:'2px',overflow:'hidden',width:'100%',height:'100%', backgroundImage:`url(${Background})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
                        </div>
                    </div>
                    <div style={{width:'40%',marginLeft:'30px'}}>
                        <div className={styles.text4}>
                            <div className={styles.name4}>{result.original_title||result.title}</div>
                            <div className={styles.year4}>{`${result.release_date}`}</div>
                            <div style={{display:'flex',alignItems:'center',marginTop:'px'}} ><AiTwotoneStar color="#ffd700" style={{paddingRight:'4px'}}></AiTwotoneStar>
                                {result.vote_average}
                            </div>

                        </div>
                        <div className={styles.overview}>
                            {cutDownOverviewe(`${result.overview || "Overview currently not available"}`)}
                        </div>
                        <div className={styles.viewMoreButton} onClick={()=> router.push(`/about/?id=${result.id}`)}>View Details</div>
                    </div>
                </div>
            );
        case "people":
            return (
                <div className="flex">
                    <div onClick={()=> router.push(`/person/?id=${result.id}`)} className={`p-2 group cursor-pointer ${styles.peopleParent5}`}>
                        <div style={{borderRadius:'5px',overflow:'hidden',width:'130px',height:'90%', backgroundImage:`url(${ProfilePath})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
                        </div>
                        <div className={styles.text3}>
                            <div className={styles.name3}>{result.name}</div>            
                        </div>
                    </div>
                    <div style={{width:'100%',minWidth:'100px',display:'flex',alignItems:'center'}}>
                        <div>
                            {result.known_for.slice(0,4).map((movie,index) => (
                                <div className={styles.movieNames} onClick={()=> router.push(`/about/?id=${movie.id}&type=${movie.media_type}`)}>{generateTitle(`${movie.name||movie.original_title||movie.original_name}`,35)}</div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case "cast":
            return (
                <div className="flex">
                    <div onClick={()=> router.push(`/person/?id=${result.id}`)} className={`p-2 group cursor-pointer ${styles.peopleParent6}`}>
                        <div style={{borderRadius:'5px',overflow:'hidden',width:'145px',height:'70%',backgroundColor:'black', backgroundImage:`url(${ProfilePath})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition:'center'}}>
                        </div>
                        <div className={styles.text3}>
                            <div className={styles.name5}>{result.original_name}</div>
                            <div className={styles.characterName}>{result.character}</div>            
                        </div>
                    </div>
                    
                </div>
            );
        default:
            {/* Small*/}
            return (
                <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={`p-2 group cursor-pointer ${styles.parent}`}>
                    <div style={{borderRadius:'5px',overflow:'hidden'}}>
                        <Image 
                            layout='responsive'
                            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`||
                                `${BASE_URL}${result.poster_path}` }
                            height={1080}
                            width={1920}
                            />
                        </div>
                    <div className={styles.text}>
                        <div className={styles.name}>{result.title || result.original_title}</div>
                        <div className={styles.year}>{`${result.release_date}`.slice(0,4)}</div>
                        <div onClick={()=> router.push(`/about/?id=${result.id}`)} className={styles.viewButton}><a>View</a></div>
                    </div>
                </div>
            );
    };
}

export default DisplayCard
