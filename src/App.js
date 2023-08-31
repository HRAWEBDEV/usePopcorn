import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Logo from './components/Logo';
import Search from './components/Search';
import Results from './components/Results';
import Box from './components/Box';
import MoviesList from './components/MoviesList';
import WatchedMovieList from './components/WatchedMovieList';
import RatingStar from './components/RatingStar';
import './index.css';

const apiKey = '31c8b5ab';
const apiUri = 'http://www.omdbapi.com';

export default function App() {
 const [error, setError] = useState('');
 const [isLoading, setIsLoading] = useState(false);
 const [movies, setMovies] = useState([]);
 const [watched, setWatched] = useState([]);
 const [query, setQuery] = useState('');

 const handleChangeQuery = async (newQuery) => {
  setQuery(newQuery);
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
    const result = await fetch(`${apiUri}/?apikey=${apiKey}&s=${search}`, {
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
     {!isLoading && !error && <MoviesList movies={movies} />}
    </Box>
    <Box>
     <WatchedMovieList watched={watched} />
    </Box>
   </Main>
  </>
 );
}
