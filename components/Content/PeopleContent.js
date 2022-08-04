import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./Content.module.css"
import { useEffect, useRef } from "react"

function PeopleContent({results,type}) {

  useEffect(()=>{
  },[results]);
  switch(type){
        case "noTitle":
            return (
                <>
                <div style={{marginTop:'18px'}}className={styles.people}>
                    {results.map((person,index) => (
                        <DisplayCard key={person.id} result={person} type="people"></DisplayCard>
                    ))}

                </div>
                </>
            )
        case "cast":
            return (
                <>
                <div style={{marginTop:'50px'}} className={styles.cast}>
                    {results.map((person,index) => (
                        <DisplayCard key={person.id} result={person} type="cast"></DisplayCard>
                    ))}

                </div>
                </>
            )
        default:
            return (
                <>
                <div className={styles.title}>Trending Celebrities <a style={{cursor:'pointer',color:'#29b6f6',marginLeft:'45px',fontSize:'13px'}}>More</a></div>
                <div className={styles.people}>
                    {results.map((person,index) => (
                        <DisplayCard key={person.id} result={person} type="people"></DisplayCard>
                    ))}

                </div>
                </>
            )
    }
}

export default PeopleContent