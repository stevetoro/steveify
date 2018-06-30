import React , { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

const SearchResults = () => (
  <div className="SearchResults">
    <h2>Search Results</h2>
    <Tracklist />
  </div>
);

export default SearchResults;