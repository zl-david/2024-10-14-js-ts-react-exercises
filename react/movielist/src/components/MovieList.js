import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import configuration from "../data/configuration.json";
import "./movieList.css";

const MovieList = ({ trending, handleAddToWatchlist }) => {
  return (
    <ul className="movie-list">
      {trending.results.map(movie => (
        <li key={movie.id} className="movie-list__item">
          <div className="movie__card">
            <div>
              <img
                className="movie__card__thumb"
                src={[
                  configuration.images.secure_base_url,
                  configuration.images.poster_sizes[2],
                  movie.poster_path
                ].join("/")}
                alt={movie.title}
              />
              <button
                className="movie__card__add btn btn--icon"
                onClick={handleAddToWatchlist(movie)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="movie__card__content">
              <h3 className="movie__card__title">
                {movie.title || movie.name}
              </h3>
              <p className="movie__card__genres">
                {movie.genre_ids.join(", ")}
              </p>
              <span className="movie__card__date"> {movie.release_date}</span>
              <span className="movie__card__score">
                <FontAwesomeIcon icon={faStar} size="xs" /> {movie.vote_average}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
