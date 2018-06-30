import React , { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = ({ searchResults }) => (
  <div className="SearchResults">
    <h2>Search Results</h2>
    <Tracklist tracks={ searchResults } />
  </div>
);

export default SearchResults;