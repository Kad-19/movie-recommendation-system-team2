import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

//FIREBASE----------------
import { DB,auth } from "@/firebase";
import { getDocs, collection } from "firebase/firestore";
import { data } from "autoprefixer";

//------------------------------


const WishListPage = () => {
  const [movies, setMovies] = useState([]);
  const [movie_ids,setMovieIDs] = useState([]);
  
  //, "969492"

  //-----------RETRIVING DATA FROM FIREBASE----------------------------

  const [MovieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(DB, "movies");

  useEffect(() => {

    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          //id: doc.id,
        }));
        console.log(filteredData)
        setMovieList(filteredData)
      } catch (err) {
        console.error(err);
      }
    };
    
    getMovieList();
  }, []);

  console.log(MovieList)
  const currentMovie = MovieList.map((movie) => {
    if(movie.userId== auth?.currentUser?.uid){
    return (movie.movieID);
    }
  })
  console.log(currentMovie)

  useEffect(()=>{
    setMovieIDs([...currentMovie]);
  },[])
  
  console.log(movie_ids)
  
  // currentMovie.map((each)=>{
  //   setMovieIDs((prev)=>([...movie_ids,each]))
  // })

  //--------------------------------------------------------------------

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await Promise.all(
        movie_ids.map((movie_id) => fetchMovie(movie_id))
      );
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  const fetchMovie = async (movie_id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=2993d064f9608273325bbc41faec9f86`
    );
    const data = await response.json();
    return data;
  };
  return (
    <section className="movie_list pt-7">
      <div className="movie_cards min-h-screen">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default WishListPage;
