import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "./ui/input";
import MovieList from "./MovieList";
import Pagination from "./Pagination";

const SearchResultsPage = () => {
  const { query } = useParams();
  const [searchString, setSearchString] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <main>
      <div>
        <Input
          placeholder="search movies"
          onChange={(e) => {
            setCurrentPage(1);
            setSearchString(e.target.value)}}
          value={searchString}
          className="text-black"
        />
        {searchString == "" || !searchString ? (
          <div>No search Results</div>
        ) : (
          <MovieList
            type=""
            movie_id=""
            genre={[]}
            search={searchString}
            page={currentPage}
            total_pages_setter={setTotalPages}
          />
        )}
      </div>
      <section className="flex justify-end w-[100%] pr-[3rem]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </section>
    </main>
  );
};

export default SearchResultsPage;
