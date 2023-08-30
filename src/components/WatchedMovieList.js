import WatchedMovie from './WatchedMovie';
const WatchedMovieList = ({ watched }) => {
 return (
  <ul className='list'>
   {watched.map((movie) => (
    <WatchedMovie key={movie.Title} movie={movie} />
   ))}
  </ul>
 );
};

export default WatchedMovieList;
