import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onTermChange, onSearch }) => (
  <div className="SearchBar">
    <input value={ searchTerm } onChange={ event => onTermChange(event.target.value)  } placeholder="Enter A Song, Album, or Artist" />
    <a onClick={ onSearch } >SEARCH</a>
  </div>
);

export default SearchBar;