import WatchedMovie from './WatchedMovie';
import WatchedSummary from './WatchedSummary';

const WatchedMovieList = ({ watched, onDelete }) => {
 return (
  <>
   <WatchedSummary watched={watched} />
   <ul className='list'>
    {watched.map((movie) => (
     <WatchedMovie key={movie.imdbId} movie={movie} onDelete={onDelete} />
    ))}
   </ul>
  </>
 );
};

export default WatchedMovieList;
