import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";
import VideoPopup from "./VideoPopup";
function SingleMoviePage() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState("");

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

  return (
    <main>
      <section className={`m-4 grid grid-cols-2 gap-1 text-black bg-white`}>
        <div>
          <img
            className="p-8"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Movie poster"
          />
        </div>
        <div className="p-4">
          <p>{movie.title}</p>
          <p>{movie.release_date}</p>
          <p>Ratings : {movie.vote_average}⭐</p>
          <p>{movie.tagline}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <VideoPopup link={`https://www.youtube.com/embed/${trailer}`} />
        </div>
      </section>
      <section>
        <h2>Related Movies</h2>
        <MovieList type="" search="" genre={[]} movie_id={movie.id || ""} />
      </section>
    </main>
  );
}
export default SingleMoviePage;
