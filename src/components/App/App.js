import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const playlistName = "Nas Playlist";

const searchResults = [
  {
  id: 0,
  name: "Not for Radio",
  artist: "Nas",
  album: "Nasir"
  },
  {
  id: 1,
  name: "Cops Shot the Kid",
  artist: "Nas",
  album: "Nasir"
  },
  {
  id: 2,
  name: "White Label",
  artist: "Nas",
  album: "Nasir"
  }
];

const playlistTracks = [
  {
  id: 3,
  name: "The World is Yours",
  artist: "Nas",
  album: "Illmatic"
  },
];

class App extends Component {
  state = {
    playlistName,
    searchResults,
    playlistTracks
  }

  render = () => (
    <div>
      <h1>steve<span className="highlight">ify</span></h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={ this.state.searchResults } />
          <Playlist playlistName={ this.state.playlistName } playlistTracks={ this.state.playlistTracks } />
        </div>
      </div>
    </div>
  )
};

export default App;