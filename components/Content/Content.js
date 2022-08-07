import { Result } from "postcss"
import DisplayCard from "../DisplayCard/DisplayCard"
import styles from "./Content.module.css"

function Content({results,title}) {
  return (
    <div style={{height:'100%',width:'100%'}}>
      <div style={{marginTop:'30px'}}className={styles.title}>{title||'Popular Movies'}:</div>
      <div style={{ height:'100%'}} className="sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
          

          {results.map(result => (
              <DisplayCard key={result.id} result={result} type="small"></DisplayCard>
          ))}

      </div>
    </div>
  )
}

export default Content