import React , { Component } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onTermChange }) => (
  <div className="SearchBar">
    <input value={ searchTerm } onChange={ event => onTermChange(event.target.value)  } placeholder="Enter A Song, Album, or Artist" />
    <a>SEARCH</a>
  </div>
);

export default SearchBar;