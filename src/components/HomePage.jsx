import React, { useState } from "react";
import "./HomePage.css";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MovieList from "./MovieList";

const movieGenres = [
  { id: 1, genre: "Action" },
  { id: 2, genre: "Adventure" },
  { id: 3, genre: "Animation" },
  { id: 4, genre: "Comedy" },
  { id: 5, genre: "Crime" },
  { id: 6, genre: "Drama" },
  { id: 7, genre: "Family" },
  { id: 8, genre: "Fantasy" },
  { id: 9, genre: "Horror" },
  { id: 10, genre: "Mystery" },
  { id: 11, genre: "Romance" },
  { id: 12, genre: "Sci-Fi" },
  { id: 13, genre: "Thriller" },
  { id: 14, genre: "Documentary" },
  { id: 15, genre: "Biography" },
  { id: 16, genre: "Historical" },
  { id: 17, genre: "Musical" },
  { id: 18, genre: "War" },
  { id: 19, genre: "Western" },
  { id: 20, genre: "Sports" },
  { id: 21, genre: "Superhero" },
  { id: 22, genre: "Film Noir" },
  { id: 23, genre: "Psychological" },
  { id: 24, genre: "Satire" },
  { id: 25, genre: "Disaster" },
  { id: 26, genre: "Epic" },
  { id: 27, genre: "Slice of Life" },
  { id: 28, genre: "Experimental" },
  { id: 29, genre: "Mockumentary" },
  { id: 30, genre: "Dark Comedy" },
];

const HomePage = () => {
  const [genreClicked, setGenreClicked] = useState([]);

  return (
    <div>
      <div className=" w-[100%] pt-[20px] pb-[100px] page_top bg-bottom">
        <nav className="text-right">Navbar</nav>
        <div className="flex flex-col m-auto w-[50%] my-[100px] disappear-md">
          <Input
            type="text"
            placeholder="Search"
            className="rounded-3xl bg-opacity-70 border-none bg-white text-black"
          />
          <div className="flex mt-[20px] justify-center">
            {movieGenres.slice(0, 7).map((item) => (
              <Button
                variant="outline"
                className={
                  genreClicked[item.id]
                    ? `bg-[#457b9d] rounded-3xl mx-4 hover:bg-[#457b9d]`
                    : `bg-[#003049] rounded-3xl mx-4`
                }
                key={item.id}
                onClick={() => {
                  if (genreClicked[item.id]) {
                    const newList = [...genreClicked];
                    newList[item.id] = false;
                    setGenreClicked(newList);
                  } else {
                    const newList = [...genreClicked];
                    newList[item.id] = true;
                    setGenreClicked(newList);
                  }
                }}
              >
                {item.genre}
              </Button>
            ))}
          </div>
          <div className="flex mt-[20px] justify-center">
            {movieGenres.slice(7, 13).map((item) => (
              <Button
                variant="outline"
                className={
                  genreClicked[item.id]
                    ? `bg-[#457b9d] rounded-3xl mx-4 hover:bg-[#457b9d]`
                    : `bg-[#003049] rounded-3xl mx-4`
                }
                key={item.id}
                onClick={() => {
                  if (genreClicked[item.id]) {
                    const newList = [...genreClicked];
                    newList[item.id] = false;
                    setGenreClicked(newList);
                  } else {
                    const newList = [...genreClicked];
                    newList[item.id] = true;
                    setGenreClicked(newList);
                  }
                }}
              >
                {item.genre}
              </Button>
            ))}
          </div>
          <div className="flex mt-[20px] justify-center">
            {movieGenres.slice(13, 20).map((item) => (
              <Button
                variant="outline"
                className={
                  genreClicked[item.id]
                    ? `bg-[#457b9d] rounded-3xl mx-4 hover:bg-[#457b9d]`
                    : `bg-[#003049] rounded-3xl mx-4`
                }
                key={item.id}
                onClick={() => {
                  if (genreClicked[item.id]) {
                    const newList = [...genreClicked];
                    newList[item.id] = false;
                    setGenreClicked(newList);
                  } else {
                    const newList = [...genreClicked];
                    newList[item.id] = true;
                    setGenreClicked(newList);
                  }
                }}
              >
                {item.genre}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <main>
        <h2 className="ml-[10%] my-[30px] font-semibold text-3xl">Movies</h2>
        <MovieList />
      </main>
    </div>
  );
};

export default HomePage;
