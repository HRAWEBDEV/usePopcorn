import { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Logo from './components/Logo';
import Search from './components/Search';
import Results from './components/Results';
import Box from './components/Box';
import MoviesList from './components/MoviesList';
import WatchedMovieList from './components/WatchedMovieList';
import { moviesData } from './components/MoviesData';
import './index.css';

const tempWatchedData = [
 {
  imdbID: 'tt1375666',
  Title: 'Inception',
  Year: '2010',
  Poster:
   'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
  runtime: 148,
  imdbRating: 8.8,
  userRating: 10,
 },
 {
  imdbID: 'tt0088763',
  Title: 'Back to the Future',
  Year: '1985',
  Poster:
   'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  runtime: 116,
  imdbRating: 8.5,
  userRating: 9,
 },
];

export default function App() {
 const [movies, setMovies] = useState(moviesData);
 const [watched, setWatched] = useState(tempWatchedData);

 return (
  <>
   <Nav>
    <>
     <Logo />
     <Search />
     <Results movies={movies} />
    </>
   </Nav>
   <Main>
    <Box>
     <MoviesList movies={movies} />
    </Box>
    <Box>
     <WatchedMovieList watched={watched} />
    </Box>
   </Main>
  </>
 );
}
