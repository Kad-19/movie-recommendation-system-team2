import { useEffect, useState } from "react"
function Movie(){
    const [movie,setMovie]=useState({})
    const KEY="10a268b7"
    let title=""
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?t=${title}&apikey=${KEY}`)
        .then((resp)=>resp.json())
        .then((data)=>{
            setMovie(data)
            console.log(data)
        }
            )
    },[])
    return( <section className="m-4 bg-slate-100 grid grid-cols-2 gap-1 xl:m-64">
        <div>
        <img className="p-8" src={movie.Poster} alt="Loading" />
        </div>
        <div className="p-4">
            Title: {movie.Title}
            <p>
                Plot: {movie.Plot}
            </p>
            <p>
                Actors: {movie.Actors}
            </p>
            <p>
                Ratings : {movie.imdbRating}⭐
            </p>
        </div>
    </section>)
}export default Movie