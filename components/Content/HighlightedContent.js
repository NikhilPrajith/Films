import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./Content.module.css"
import { useEffect, useRef } from "react"

function HighlightedContent({results}) {

  const messagesEndRef = useRef(null)
  const middle = Math.floor(results.length/2)
  const scrollToBottom = () => {
    titleRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(()=>{
    console.log("Mess",messagesEndRef)
    console.log(messagesEndRef.current.scrollWidth)
    console.log()
    messagesEndRef.current.scrollLeft +=((messagesEndRef.current.scrollWidth) /(2));
  },[results]);
  return (
    <>
    <div className={styles.title}>Featured:</div>
    <div ref={messagesEndRef} className={styles.highlighted}>
          {results.map((result,index) => (
              <DisplayCard key={result.id} result={result} type="showCase"></DisplayCard>
          ))}

    </div>
    </>
  )
}

export default HighlightedContent