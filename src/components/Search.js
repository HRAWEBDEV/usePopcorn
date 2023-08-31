import { useState } from 'react';

const Search = ({ value = '', onChange }) => {
 const [query, setQuery] = useState(value);

 return (
  <>
   <input
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
