import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { Typography } from "@mui/material";
import { Bold } from "lucide-react";
const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
  };

  useEffect(() => {
    fetchMovies("popular");
    fetchMovies("upcoming");
    fetchMovies("top_rated");
  }, []);

  const fetchMovies = async (type) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?page=1&api_key=2993d064f9608273325bbc41faec9f86`
    );
    const data = await response.json();
    if (type == "popular") {
      setPopularMovies(data.results);
    } else if (type == "upcoming") {
      setUpcomingMovies(data.results);
    } else if (type == "top_rated") {
      setTopRatedMovies(data.results);
    }
  };
  return (
    <div>
      <div className=" w-[100%] pt-[20px] pb-[100px] page_top bg-bottom mb-[20px]">
        <div className="flex flex-col m-auto w-[75%] my-[70px]">
          <div className="my-[10px]">
            <h1 className="text-[4rem]">Welcome</h1>
            <p className="text-[2rem]">
              Millions of Movies to descover. Explore Now.
            </p>
          </div>
          <div className="flex gap-[10px]">
            <form onSubmit={handleSubmit} className="w-[100%]">
              <Input
                type="text"
                placeholder="Search movies"
                className="rounded-3xl bg-opacity-100 bg-zinc-100 text-black dark:bg-zinc-800 dark:text-white dark:font-bold"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <main className=" bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white">
        <section>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Popular
          </Typography>
          <div>
            <div className="flex overflow-auto space-x-4 p-4">
              {popularMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
        <section>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Upcoming
          </Typography>
          <div>
            <div className="flex overflow-auto space-x-4 p-4">
              {upcomingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
        <section>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Top Rated
        </Typography>
          <div>
            <div className="flex overflow-auto space-x-4 p-4">
              {topRatedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
