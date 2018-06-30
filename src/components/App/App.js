import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const App = () => (
  <div>
    <h1>steve<span className="highlight">ify</span></h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  </div>
);

export default App;