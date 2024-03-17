import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import { Rating } from "@mui/material";
import { Typography } from "@mui/material";
import { ThemeContext } from "@/App";
import VideoPopup from "./VideoPopup";
import Pagination from "./Pagination";
import { Button } from "./ui/button";
<<<<<<< HEAD

//FIREBASE ----------------
import {addDoc,collection} from 'firebase/firestore'
import { DB, auth } from "@/firebase";


=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
>>>>>>> 2dc5b78840fce6c1033b5fe75d709c26564b4ca2
function SingleMoviePage() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);



  //ADDING TO THE FIREBASE-----------------
  const movieCollectionRef=collection(DB,'movies')


  const addToWhish= async ()=>{
    window.alert('whishlist added')
    try{
    await addDoc(movieCollectionRef,{movieID: movie_id, userId:auth?.currentUser?.uid,})
    }catch(err){
      console.error(err)
    }
  }


  //-------------------------------------------------

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  useEffect(() => {
    fetchMovie();
  }, [movie_id]);

  const fetchMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=2993d064f9608273325bbc41faec9f86`
    );
    const data = await response.json();
    setMovie(data);
    fetchTrailerLink();
  };

  const fetchTrailerLink = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=2993d064f9608273325bbc41faec9f86`
    );
    const data = await response.json();
    for (let i = 0; i < data.results.length; i++) {
      if (
        data.results[i].type == "Trailer" &&
        data.results[i].site == "YouTube" &&
        data.results[i].official == true
      ) {
        setTrailer(data.results[i].key);
        break;
      }
    }
  };

  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <main className=" text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-slate-100">
      <section
        className={`grid grid-cols-2 dark:bg-gray-800 dark:text-slate-100 md:w-[90%]`}
      >
        <div className=" md:row-span-2 flex justify-center items-center">
          <img
            className="p-8 max-h-[500px]"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie poster"
            onError={function (event) {
              event.target.src = "/image-placeholder.png";
            }}
          />
        </div>
        <div className="pt-8">
          <div className="md:text-[3rem] font-semibold">{movie.title}</div>

          <Typography variant="subtitle1">{movie.release_date}</Typography>

          <Typography variant="subtitle1">
            {" "}
            Rating :
            <Rating
              readOnly
              style={{ verticalAlign: "sub" }}
              value={movie.vote_average / 2}
              precision={0.05}
            />
          </Typography>
          <Typography variant="h6" className="py-3">
            {movie.tagline}
          </Typography>
        </div>
        <div className="col-span-2 p-5 md:px-0 md:col-span-1">
          <Typography variant="h6" sx={{ fontWeight: "bold" }} className="py-4">
            Overview
          </Typography>

          <div className="pb-4">{movie.overview}</div>
          <div className="flex gap-3">
            <VideoPopup link={`https://www.youtube.com/embed/${trailer}`} />
<<<<<<< HEAD
            <Button onClick={addToWhish}>Add to WishList</Button>
=======
            <Button>
              <FontAwesomeIcon icon={faSquarePlus} className="pr-2" />
              Add to WishList
            </Button>
>>>>>>> 2dc5b78840fce6c1033b5fe75d709c26564b4ca2
          </div>
        </div>
      </section>
      <section className=" bg-gray-300 dark:bg-gray-800">
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold" }}
          className="p-8 bg-gray-400 dark:bg-gray-700"
        >
          Related Movies
        </Typography>
        <MovieList
          type=""
          search=""
          genre={[]}
          movie_id={movie.id || ""}
          page={currentPage}
          total_pages_setter={setTotalPages}
        />
      </section>
      <section className="flex justify-end w-[100%] md:px-[6rem] px-4 py-[2rem] bg-gray-200 dark:bg-gray-700">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </section>
    </main>
  );
}
export default SingleMoviePage;
