// import React from 'react'
import React, { useState, useEffect } from "react";
import './Navbar.css'

function Navbar() {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <nav className='navbar'>
        <h1>MovieMax</h1>
       
        <div className='navbar_links'>
          
         <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

            <a href="#popular">Popular 🔥</a>
            <a href="#top_rated">Top Rated 🌟</a>
            <a href="#upcoming">Upcoming 🥳</a>
          

        </div>
            
        
    </nav>
    
    
      
  )
}

export default Navbar; 
