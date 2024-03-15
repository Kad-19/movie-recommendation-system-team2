import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import MovieList from "./MovieList";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");

  

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
  };
  return (
    <div>
      <div className=" w-[100%] pt-[20px] pb-[100px] page_top bg-bottom mb-[20px]">
        <div className="flex flex-col m-auto w-[50%] my-[100px] disappear-md">
          <div className="flex gap-[10px]">
            <form onSubmit={handleSubmit} className="w-[100%]">
              <Input
                type="text"
                placeholder="Search"
                className="rounded-3xl bg-opacity-70 border-none bg-white text-black"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <main></main>
    </div>
  );
};

export default HomePage;
