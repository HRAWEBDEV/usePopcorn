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
 const [isLoading, setIsLoading] = useState(false);
 const [movies, setMovies] = useState([]);
 const [watched, setWatched] = useState([]);
 const [query, setQuery] = useState('');

 const getMovies = async ({ search = 'inception' } = {}) => {
  try {
   setIsLoading(true);
   const result = await fetch(`${apiUri}/?apikey=${apiKey}&s=${search}`);
   const data = await result.json();
   setMovies(data.Search);
  } catch (err) {
  } finally {
   setIsLoading(false);
  }
 };

 const handleChangeQuery = async (newQuery) => {};

 useEffect(() => {
  getMovies();
 }, []);

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
     {!isLoading && <MoviesList movies={movies} />}
    </Box>
    <Box>
     <WatchedMovieList watched={watched} />
    </Box>
   </Main>
  </>
 );
}
