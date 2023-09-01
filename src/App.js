import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Logo from './components/Logo';
import Search from './components/Search';
import Results from './components/Results';
import Box from './components/Box';
import MoviesList from './components/MoviesList';
import WatchedMovieList from './components/WatchedMovieList';
import MovieDetail from './components/MovieDetail';
import { apiUri } from './api';
import './index.css';

export default function App() {
 const [error, setError] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [movies, setMovies] = useState([]);
 const [watched, setWatched] = useState([]);
 const [selectedId, setSelectedId] = useState(null);
 const [query, setQuery] = useState('');

 const handleChangeQuery = async (newQuery) => {
  setQuery(newQuery);
 };

 const handleSelectId = (newId) => {
  newId === selectedId ? setSelectedId(null) : setSelectedId(newId);
 };

 const handleAddWatchedMovie = (newWatchedMovie) => {
  setWatched((prev) => [...prev, newWatchedMovie]);
 };

 const handleDeleteWatchedMovie = (deleteId) => {
  console.log(deleteId);
  setWatched((prev) => prev.filter((item) => item.imdbId !== deleteId));
 };

 useEffect(() => {
  let controller = new AbortController();
  const cleanUp = () => {
   controller.abort();
  };
  const getMovies = async ({ search = 'interstellar' } = {}) => {
   try {
    setError('');
    setIsLoading(true);
    const result = await fetch(`${apiUri}&s=${search}`, {
     signal: controller.signal,
    });
    if (!result.ok) {
     throw new Error('some thing went wrong with fetching movies');
    }
    const data = await result.json();
    if (data.Response === 'False') {
     throw new Error('movie not found');
    }
    setError('');
    setMovies(data.Search);
   } catch (err) {
    if (err.name === 'AbortError') return;
    setError(err.message);
   } finally {
    setIsLoading(false);
   }
  };
  getMovies({ search: query || undefined });
  return cleanUp;
 }, [query]);

 return (
  <>
   <Nav>
    <>
     <Logo />
     <Search value={query} onChange={handleChangeQuery} />
     <Results movies={movies} />
    </>
   </Nav>
   <Main>
    <Box>
     {isLoading && <p className='loader'>...loading</p>}
     {error && <p className='error'>{error}</p>}
     {!isLoading && !error && (
      <MoviesList movies={movies} onSelectMovie={handleSelectId} />
     )}
    </Box>
    <Box>
     <>
      {!selectedId && (
       <WatchedMovieList
        onDelete={handleDeleteWatchedMovie}
        watched={watched}
       />
      )}
      {selectedId && (
       <MovieDetail
        key={selectedId}
        onClose={() => setSelectedId(null)}
        selectedId={selectedId}
        onAddWatchedMovie={handleAddWatchedMovie}
        movies={watched}
       />
      )}
     </>
    </Box>
   </Main>
  </>
 );
}
