import React from 'react'

function FilterGroup({ minRating, onRatingClick, ratings }) {
  return (
    <ul className='movie_filter'>
      {ratings.map((rate) => (
        <li
          key={rate}
          className={`movie_filter_item ${minRating === rate ? "active" : ""}`}
          onClick={() => onRatingClick(rate)}
        >
          {rate} Star
        </li>
      ))}
    </ul>
  )
}

export default FilterGroup;
