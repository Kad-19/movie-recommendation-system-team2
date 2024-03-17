import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const WishListPage = () => {
  const [movies, setMovies] = useState([]);
  const movie_ids = ["848538", "969492"];
  console.log(movies);

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
