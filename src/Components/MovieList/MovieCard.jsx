import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  // Check if poster_path contains "images" (static) or is TMDB API
  const imageUrl = movie.poster_path.includes('/images/')
    ? movie.poster_path          // static image in public folder
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;  // API image

  const title = movie.original_title || movie.title;

  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="movie_card"
    >
      <img src={imageUrl} alt={title} className="movie_poster" />

      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="movie_date_rate">{movie.release_date}</div>
        <p>{movie.vote_average} ⭐</p>
        <p className="movie_description">{movie.overview?.slice(0, 100) + "..."}</p>
      </div>
    </a>
  );
}

export default MovieCard;
