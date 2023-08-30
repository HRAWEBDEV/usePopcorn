import { useState } from 'react';
import Movie from './Movie';
import { moviesData } from './MoviesData';

const MoviesList = () => {
 const [movies, setMovies] = useState(moviesData);
 return (
  <ul className='list'>
   {movies?.map((movie) => (
    <Movie key={movie.Title} movie={movie} />
   ))}
  </ul>
 );
};

export default MoviesList;
