import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList/MovieList';

function App() {

  useEffect(() => {
    alert("⚠️ Please connect to a VPN (VPNLY- Extension) & Use Microsoft Edge So TMDB API Work Properly!");
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <MovieList type="popular" title="Popular" />
      <MovieList type="top_rated" title="Top Rated" />
      <MovieList type="upcoming" title="Upcoming" />
    </div>
  );
}

export default App;
