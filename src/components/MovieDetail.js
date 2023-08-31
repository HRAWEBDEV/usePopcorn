import { useState, useEffect } from 'react';
import RatingStar from './RatingStar';
import { apiUri } from '../api';

const MovieDetail = ({ selectedId, onClose, onAddWatchedMovie }) => {
 const [isLoading, setIsLoading] = useState(false);
 const [movieDetail, setMovieDetail] = useState({});
 const {
  Title: title,
  Year: year,
  Poster: poster,
  Runtime: runtime,
  imdbRating,
  Plot: plot,
  Released: released,
  Actors: actors,
  Director: director,
  Genre: genre,
 } = movieDetail;

 const handleAdd = () => {
  const newWatchedMovie = {
   imdbId: selectedId,
   title,
   year,
   poster,
   imdbRating: 0,
   userRating: 0,
   runtime: Number(runtime.split(' ').at(0)),
  };
  onAddWatchedMovie(newWatchedMovie);
  onClose();
 };

 useEffect(() => {
  const getMovieDetail = async () => {
   setIsLoading(true);
   const result = await fetch(`${apiUri}&i=${selectedId}`);
   const data = await result.json();
   setMovieDetail(data);
   setIsLoading(false);
  };
  getMovieDetail();
 }, [selectedId]);

 return (
  <div className='details'>
   {isLoading && <p className='loader'>... loading</p>}
   {!isLoading && (
    <>
     <header>
      <button className='btn-back' onClick={onClose}>
       &larr;
      </button>
      <img src={poster} alt={`poster of ${title} movie`} />
      <div className='details-overview'>
       <h2>{title}</h2>
       <p>
        {released} &bull; {runtime}
       </p>
       <p>{genre}</p>
       <p>
        <span>⭐</span>
        {imdbRating} IMDB rating
       </p>
      </div>
     </header>
     <section>
      <div className='rating'>
       <RatingStar maxRating={10} size={24} color='yellow' />
       <button className='btn-add' onClick={handleAdd}>
        add to list
       </button>
      </div>
      <p>
       <em>{plot}</em>
      </p>
      <p>starring {actors}</p>
      <p>Directed by: {director}</p>
     </section>
    </>
   )}
  </div>
 );
};

export default MovieDetail;
