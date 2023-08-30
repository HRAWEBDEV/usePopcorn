import { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Logo from './components/Logo';
import Search from './components/Search';
import Results from './components/Results';
import ListBox from './components/ListBox';
import WatchedBox from './components/WatchedBox';
import { moviesData } from './components/MoviesData';

import './index.css';

export default function App() {
 const [movies, setMovies] = useState(moviesData);

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
    <ListBox movies={movies} />
    <WatchedBox />
   </Main>
  </>
 );
}
