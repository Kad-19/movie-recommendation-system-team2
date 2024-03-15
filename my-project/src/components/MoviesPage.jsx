import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import MovieList from "./MovieList";
import FilterGroup from "./FilterGroup";


const MoviesPage = () => {
  const [genreClicked, setGenreClicked] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieType, setMovieType] = useState("");

  const fetchMovieGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=2993d064f9608273325bbc41faec9f86`
    );
    const data = await response.json();
    setMovieGenres(data.genres);
  };
  useEffect(() => {
    fetchMovieGenres();
  }, []);

  const searchGenre = (genre) => {
    const foundGenre = genreClicked.find((item) => item.id == genre.id);
    return foundGenre;
  };

  return (
    <div>
      <header>
        <h2>Filter by genre</h2>
        <div className="mt-[20px] justify-center overflow-x-auto whitespace-nowrap">
          {movieGenres.slice(0, 19).map((item) => (
            <Button
              variant="outline"
              className={
                searchGenre(item)
                  ? `bg-[#457b9d] rounded-3xl mx-4 hover:bg-[#457b9d]`
                  : `bg-[#003049] rounded-3xl mx-4`
              }
              key={item.id}
              onClick={() => {
                if (searchGenre(item)) {
                  const newList = genreClicked.filter(
                    (genre) => genre.id != item.id
                  );
                  setGenreClicked(newList);
                } else {
                  const newList = [...genreClicked, item];
                  setGenreClicked(newList);
                }
              }}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </header>
      <main className="flex">
        {/* <div className="my-[50px] bg-black">
          <div className="align_center">
            <select name="by" id="" className="movie_sorting text-black">
              <option value="default">Sort by</option>
              <option value="release_date">Date</option>
              <option value="vote_average">Rating</option>
            </select>
            
          </div>
        </div> */}

        <div>
          <div className="flex justify-end">
            <Button
              variant="link"
              className="text-white text-lg"
              onClick={() => {
                setMovieType("popular");
              }}
            >
              Popular
            </Button>
            <Button
              variant="link"
              className="text-white text-lg"
              onClick={() => {
                setMovieType("upcoming");
              }}
            >
              Upcoming
            </Button>
            <Button
              variant="link"
              className="text-white text-lg"
              onClick={() => {
                setMovieType("top_rated");
              }}
            >
              Top Rated
            </Button>
          </div>
          <MovieList
            type={movieType || "popular"}
            search=""
            movie_id=""
            genre={genreClicked}
          />
        </div>
      </main>
    </div>
  );
};

export default MoviesPage;
