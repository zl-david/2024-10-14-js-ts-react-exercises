import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import trending from "../data/trending.json";
import configuration from "../data/configuration.json";
import rawMovieGenres from "../data/movie_genres.json";
import "./app.css";
import MovieList from "./MovieList";

const watchlist = [
  {
    id: 522938,
    video: false,
    vote_count: 718,
    vote_average: 5.9,
    title: "Rambo: Last Blood",
    release_date: "2019-09-19",
    original_language: "en",
    original_title: "Rambo: Last Blood",
    genre_ids: [28, 18, 53],
    backdrop_path: "/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
    adult: false,
    overview:
      "After fighting his demons for decades, John Rambo now lives in peace on his family ranch in Arizona, but his rest is interrupted when Gabriela, the granddaughter of his housekeeper María, disappears after crossing the border into Mexico to meet her biological father. Rambo, who has become a true father figure for Gabriela over the years, undertakes a desperate and dangerous journey to find her.",
    poster_path: "/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
    popularity: 161.016,
    media_type: "movie"
  },
  {
    id: 474350,
    video: false,
    vote_count: 2376,
    vote_average: 6.8,
    title: "It Chapter Two",
    release_date: "2019-09-04",
    original_language: "en",
    original_title: "It Chapter Two",
    genre_ids: [18, 27],
    backdrop_path: "/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
    adult: false,
    overview:
      "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    poster_path: "/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
    popularity: 107.316,
    media_type: "movie"
  },
  {
    id: 492188,
    video: false,
    vote_count: 324,
    vote_average: 8.3,
    title: "Marriage Story",
    release_date: "2019-11-06",
    original_language: "en",
    original_title: "Marriage Story",
    genre_ids: [18, 10749],
    backdrop_path: "/4PCO7tewIGnE6ySjVf2DbJ3pjqq.jpg",
    adult: false,
    overview:
      "A stage director and an actor struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.",
    poster_path: "/bm6zKJjKYKrIy3dcnOLk0kF85cl.jpg",
    popularity: 85.207,
    media_type: "movie"
  }
];

const App = () => {
  const sideBarOpen = true;
  const selectedGenre = "all";

  const handleToggleSidebar = () => {};
  const handleAddToWatchlist = movie => () => {};
  const handleSelectGenre = genreId => () => {};

  return (
    <div className="app">
      <main className="main">
        <h1 className="title">
          EXPLORE <small className="title__small">/ Trending</small>
        </h1>
        <MovieList
          trending={trending}
          handleAddToWatchlist={handleAddToWatchlist}
        />
      </main>
      <aside class={`sidebar ${sideBarOpen ? "" : "sidebar--closed"}`}>
        <section class="watchlist">
          <h2 className="watchlist__title">Watchlist</h2>
          <label>Sort by</label>
          <select className="select">
            <option value="title">Title</option>
            <option value="vote_average">Rating</option>
          </select>
          <label>Genres</label>
          <ul className="genres_filter">
            <li
              className={
                selectedGenre === "all" ? "genres_filter__item--selected" : ""
              }
              onClick={handleSelectGenre("all")}
            >
              All
            </li>
          </ul>
          <ul className="watchlist__movies">
            {watchlist.map(movie => (
              <li className="watchlist__movies__item">
                <div className="watchlist__movie__item__img">
                  <div className="square movie__card__thumb">
                    <img
                      src={[
                        configuration.images.secure_base_url,
                        configuration.images.poster_sizes[0],
                        movie.poster_path
                      ].join("/")}
                      alt={movie.title}
                    />
                  </div>
                </div>
                <div>
                  <h4 className="watchlist__movie__item__title">
                    {movie.title || movie.name}
                  </h4>
                  <p className="watchlist__movie__item__genre">
                    {movie.genre_ids.join(", ")}
                  </p>
                </div>
                <div className="watchlist__movie__item__score">
                  <FontAwesomeIcon icon={faStar} size="xs" />{" "}
                  {movie.vote_average}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <button class="sidebar__close btn btn--inverse btn--icon">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </aside>
    </div>
  );
};

export default App;
