import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import MovieList from "./MovieList";
import FilterGroup from "./FilterGroup";
import Pagination from "./Pagination";

const MoviesPage = () => {
  const [genreClicked, setGenreClicked] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieType, setMovieType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <header>
        <h2>Filter by genre</h2>
        <div className="m-4 justify-center overflow-x- whitespace-wrap">
          {movieGenres.slice(0, 19).map((item) => (
            <Button
              variant="outline"
              className={
                searchGenre(item)
                  ? `bg-[#457b9d] rounded-3xl mx-4 my-2 hover:bg-[#457b9d]`
                  : `bg-[#003049] rounded-3xl mx-4 my-2`
              }
              // {/*A grid that would adjust to the screen size would have been better */}
              key={item.id}
              onClick={() => {
                setCurrentPage(1);
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
                setCurrentPage(1);
              }}
            >
              Popular
            </Button>
            <Button
              variant="link"
              className="text-white text-lg"
              onClick={() => {
                setMovieType("upcoming");
                setCurrentPage(1);
              }}
            >
              Upcoming
            </Button>
            <Button
              variant="link"
              className="text-white text-lg"
              onClick={() => {
                setMovieType("top_rated");
                setCurrentPage(1);
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
            page={currentPage}
            total_pages_setter={setTotalPages}
          />
        </div>
      </main>
      <section className="flex justify-end w-[100%] pr-[3rem]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </section>
    </div>
  );
};

export default MoviesPage;
