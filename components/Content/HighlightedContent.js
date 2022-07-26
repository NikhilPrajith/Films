import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./Content.module.css"

function HighlightedContent({results}) {
  return (
    <>
    <div className={styles.title}>Featured:</div>
    <div className={styles.highlighted}>
          {results.map(result => (
              <DisplayCard key={result.id} result={result} type="showCase"></DisplayCard>
          ))}

    </div>
    </>
  )
}

export default HighlightedContent