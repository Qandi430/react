import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function Movie({title,poster,genres,synopsis}){
    return(
        <div className="movie">
            <div className="movie_columns">
                <MoviePoster poster={poster} title={title}/>
            </div>
            <div className="movie_columns">
                <h1>{title}</h1>
                <div className="movie_genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="movie_synopsis">
                   {synopsis}
                </p>
            </div>
            
        </div>
    )
}
Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
};

function MoviePoster({poster,title}){
    return (
        <img src={poster} alt={title} title={title} className="movie_poster"/>
    )
};

function MovieGenre({genre}){
    return (
        <span className="movie_genre">{genre} </span>
    )
};
MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired
};
MovieGenre.prototype = {
    genre:PropTypes.string.isRequired
};
export default Movie;