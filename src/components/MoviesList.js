import Movie from './Movie';
const MoviesList = ({ movies, onSelectMovie }) => {
 return (
  <ul className='list list-movies'>
   {movies?.map((movie) => (
    <Movie
     key={movie.imdbID}
     movie={movie}
     onSelect={() => onSelectMovie(movie.imdbID)}
    />
   ))}
  </ul>
 );
};

export default MoviesList;
