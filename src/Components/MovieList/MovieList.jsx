import React, { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";
import staticMovies from "../../StaticMovies";

function MovieList({ type, title }) {
  const [apiMovies, setApiMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(staticMovies);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({ by: "default", order: "asc" });

  useEffect(() => {
    fetchMovies();
  }, [type]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=3555f66d3a837c895dbfc3fbf8ba9a06&language=en-US&page=1`
      );
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      setApiMovies(data.results);
    } catch (error) {
      console.error("API fetch failed, showing static movies only:", error);
    }
  };

  const handleFilter = (rate) => setMinRating((prev) => (prev === rate ? 0 : rate));

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    let combined = [...staticMovies, ...apiMovies];

    if (minRating > 0) combined = combined.filter((m) => m.vote_average >= minRating);

    if (sort.by !== "default") {
      combined.sort((a, b) => {
        if (sort.by === "release_date") {
          return sort.order === "asc"
            ? new Date(a.release_date) - new Date(b.release_date)
            : new Date(b.release_date) - new Date(a.release_date);
        }
        if (sort.by === "vote_average") {
          return sort.order === "asc"
            ? a.vote_average - b.vote_average
            : b.vote_average - a.vote_average;
        }
        return 0;
      });
    }

    setFilteredMovies(combined);
  }, [apiMovies, minRating, sort]);

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header">
        <h2 className="movie_list_heading">{title} 🔥</h2>

        <div className="movie_list_fs">
          <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[8, 7, 6]} />

          <select name="by" onChange={handleSort} value={sort.by} className="movie_sorting">
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select name="order" onChange={handleSort} value={sort.order} className="movie_sorting">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </section>
  );
}

export default MovieList;
