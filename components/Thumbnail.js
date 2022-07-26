import Image from "next/image"
function Thumbnail({ result }) {
    const BASE_URL = 'https://image.tmdb.org/t/p/w500/'
  return (
    <div className="p-2 group cursor-pointer">
        <Image 
            layout='responsive'
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`||
                `${BASE_URL}${result.poster_path}` }
            height={1080}
            width={1920}/>
        <div className="p-2">
            <p className="='truncate">{result.overview}</p>
            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                {result.title || result.original_name}
            </h2>

        </div>
    </div>
  )
}

export default Thumbnail
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