import React , { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = ({ searchResults, action }) => (
  <div className="SearchResults">
    <h2>Search Results</h2>
    <Tracklist action={ action } tracks={ searchResults } />
  </div>
);

export default SearchResults;