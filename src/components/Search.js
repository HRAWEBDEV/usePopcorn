import { useState, useRef, useEffect } from 'react';

const Search = ({ value = '', onChange }) => {
 const [query, setQuery] = useState(value);
 const inputRef = useRef(null);

 useEffect(() => {
  inputRef.current.foucs();
 }, []);

 return (
  <>
   <input
    ref={inputRef}
    className='search'
    type='text'
    placeholder='Search movies...'
    value={query}
    onChange={(e) => {
     const newValue = e.target.value;
     setQuery(newValue);
     onChange && onChange(newValue);
    }}
   />
  </>
 );
};

export default Search;
