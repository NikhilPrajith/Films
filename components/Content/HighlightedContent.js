import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./Content.module.css"
import { useEffect, useRef } from "react"

function HighlightedContent({results}) {

  const centerRef = useRef(null)
  const scrollToBottom = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(()=>{
    centerRef.current.scrollLeft +=((centerRef.current.scrollWidth) /(3));
  },[results]);
  return (
    <>
    <div ref={centerRef} className={styles.highlighted}>
          {results.map((result,index) => (
              <DisplayCard key={result.id} result={result} type="showCase"></DisplayCard>
          ))}

    </div>
    </>
  )
}

export default HighlightedContent