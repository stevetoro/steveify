import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchSpotify }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = ({ target }) => setSearchTerm(target.value)

  const handleSearch = () => searchSpotify(searchTerm)

  return (
    <div className="SearchBar">
      <input value={ searchTerm } onChange={ handleSearchTermChange } placeholder="Enter A Song, Album, or Artist" />
      <a onClick={ handleSearch } >SEARCH</a>
    </div>
  );
};

export default SearchBar;