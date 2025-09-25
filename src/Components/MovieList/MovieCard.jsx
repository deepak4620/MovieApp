import React from 'react'                                                   
import './MovieCard.css'

function MovieCard({movie} ){

  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className='movie_card'>
       
    < img src= { `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=' movie poster'  
   className='movie_poster'/>  

<div className='movie_details'>                                             
   <h3 className='movie_details_heading'>{movie.original_title} </h3>            
  
  <div className='movie_date_rate'>{movie.release_date}</div>
  
    <p>{movie.vote_average}  ⭐ </p>
  
  <p className=' movie_description'>{movie.overview.slice(0,100) + "..."}</p>

</div>
</a>
)
}

export default MovieCard
