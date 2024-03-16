import React, { useContext, useEffect, useState} from "react";
import { Button } from "./ui/button";
import MovieList from "./MovieList";
import FilterGroup from "./FilterGroup";
import { Typography } from "@mui/material";
import Pagination from "./Pagination";
import { ThemeContext } from "@/App";
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
const {theme}=useContext(ThemeContext)
console.log(theme)
  return (
    <div>
      <header className=" bg-zinc-100 text-gray-950 dark:bg-zinc-800 dark:text-white">
        <div className="mx-4 my-1">
        <Typography variant="h6">
          Filter by genre
        </Typography>
        </div>

        <div className="m-4 justify-center overflow-x- whitespace-wrap dark:text-white">
          {movieGenres.slice(0, 19).map((item) => {
            let tailwindConfigeDark=searchGenre(item)
            ? `bg-zinc-600 rounded-3xl mx-4 my-2 hover:bg-[#457b9d]`
            : `bg-zinc-700 rounded-3xl mx-4 my-2`
            let tailwindConfigeLight=searchGenre(item)
            ? `bg-zinc-600  rounded-3xl mx-4 my-2 hover:bg-[#457b9d]`
            : `bg-zinc-300 border-2 border-gray-700 text-black rounded-3xl mx-4 my-2`
            return (<Button
              variant="outline"
              className={theme=="dark"?tailwindConfigeDark:tailwindConfigeLight}
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
            </Button>)
      }
    )
    }
        </div>
      </header>
      <main className="flex bg-slate-100 text-gray-950 dark:bg-zinc-800 dark:bg-slate-50">
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
              className="text-lg"
              onClick={() => {
                setMovieType("popular");
                setCurrentPage(1);
              }}
            >
              Popular
            </Button>
            <Button
              variant="link"
              className="text-lg"
              onClick={() => {
                setMovieType("upcoming");
                setCurrentPage(1);
              }}
            >
              Upcoming
            </Button>
            <Button
              variant="link"
              className="text-lg"
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
      <section className="flex justify-end w-[100%] pr-[3rem] bg-zinc-100 dark:bg-zinc-700">
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
