import WatchedMovie from './WatchedMovie';
import WatchedSummary from './WatchedSummary';

const WatchedMovieList = ({ watched }) => {
 return (
  <>
   <WatchedSummary watched={watched} />
   <ul className='list'>
    {watched.map((movie) => (
     <WatchedMovie key={movie.Title} movie={movie} />
    ))}
   </ul>
  </>
 );
};

export default WatchedMovieList;
