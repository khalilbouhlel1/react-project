import React, { useState, useEffect } from 'react'
import './App.css'
import MovieCard from './MovieCard'
import searchIcon from './search.svg'
const API_URL='http://www.omdbapi.com/?apikey=1adaf9b2'
const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies=async(title)=>{
        try {
            const response=await fetch(`${API_URL}&s=${title}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data=await response.json()
            setMovies(data.Search || []); // Ensure movies is an array
        } catch (error) {
            console.error('Fetch error:', error);
            setMovies([]); // Reset movies to an empty array on error
        }
    }
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        searchMovies('batman');
    }, []);
  return (
    <div className='app'>
        <h1>MoviesHere</h1>
        <div className='search'>
            <input placeholder='Search for movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button 
                onClick={() => searchMovies(searchTerm)}
                onKeyDown={(e) => e.key === 'Enter' && searchMovies(searchTerm)}
                className="search-button"
            >
                <img 
                    src={searchIcon} 
                    alt='search' 
                />
            </button>
        </div>
        {
            movies.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
            </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }
    </div>
  )
}

export default App
