import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./Content.module.css"
import { useEffect, useRef } from "react"

function PosterContent({results}) {

  useEffect(()=>{
  },[results]);

  return (
    <>
    <div className={styles.title}>Featured <a style={{cursor:'pointer',color:'#29b6f6',marginLeft:'45px',fontSize:'13px'}}>More</a></div>
    <div className={styles.poster}>
          {results.map((result,index) => (
              <DisplayCard key={result.id} result={result} type="poster"></DisplayCard>
          ))}

    </div>
    </>
  )
}

export default PosterContent