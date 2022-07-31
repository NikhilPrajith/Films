import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./Content.module.css"
import { useEffect, useRef } from "react"

function DetailedContent({result}) {

  useEffect(()=>{
  },[result]);

  return (
    <>
    <div className={styles.detailed}>
        <DisplayCard result={result} type="detailed"></DisplayCard>
            
          

    </div>
    </>
  )
}

export default DetailedContent