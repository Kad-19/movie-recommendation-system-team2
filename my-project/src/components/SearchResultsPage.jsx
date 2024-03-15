import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "./ui/input";
import MovieList from "./MovieList";

const SearchResultsPage = () => {
  const { query } = useParams();
  const [searchString, setSearchString] = useState(query);
  return (
    <div>
      <Input
        placeholder="search movies"
        onChange={(e) => setSearchString(e.target.value)}
        value={searchString}
        className="text-black"
      />
      {searchString == "" || !searchString ? (
        <div>No search Results</div>
      ) : (
        <MovieList type="" movie_id="" genre={[]} search={searchString} />
      )}
    </div>
  );
};

export default SearchResultsPage;
