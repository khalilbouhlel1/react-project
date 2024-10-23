import React from 'react'
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
    if (!movie) {
        return <div>No movie data available</div>;
    }

    return (
        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
        Title: PropTypes.string
    })
};

export default MovieCard;
