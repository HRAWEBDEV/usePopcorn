import Movie from './Movie';
const MoviesList = ({ movies }) => {
 return (
  <ul className='list'>
   {movies?.map((movie) => (
    <Movie key={movie.Title} movie={movie} />
   ))}
  </ul>
 );
};

export default MoviesList;
