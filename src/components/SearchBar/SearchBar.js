import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchSpotify }) => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const storedSearchTerm = sessionStorage.getItem('searchTerm')
    setSearchTerm(storedSearchTerm)
  }, [])

  useEffect(() => {
    sessionStorage.setItem('searchTerm', searchTerm)
  }, [searchTerm])

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