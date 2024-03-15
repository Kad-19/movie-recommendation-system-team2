import React from "react";
import "./MovieCard.css";
import Star from "/star.png";
import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <NavLink className="movie_card flex-shrink-0" to={`/movie/${movie.id}`} target="_blank">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.original_title}</h3>
        <div className="align_center movie_date_rate">
          <p>{movie.release_date}</p>
          <p className="align_center">
            {movie.vote_average}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          {movie.overview.slice(0, 100) + "..."}
        </p>
      </div>
    </NavLink>
  );
};

export default MovieCard;
