import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';

const searchTerm = "";
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
    searchTerm,
    searchResults,
    playlistName,
    playlistTracks
  }

  search = () => {
    console.log(this.state.searchTerm);
  }

  addTrack = track => () => {
    if (!this.state.playlistTracks.some(_track => _track.id == track.id))
      this.setState({ playlistTracks: [...this.state.playlistTracks, track] });
  }

  removeTrack = track => () => {
    const playlistTracks = this.state.playlistTracks.filter(_track => _track.id != track.id);
    this.setState({ playlistTracks });
  }

  handleInputChange = name => value => this.setState({ [name]: value });

  render = () => (
    <div>
      <h1>steve<span className="highlight">ify</span></h1>
      <div className="App">
        <SearchBar 
          searchTerm={ this.state.searchTerm }
          onTermChange={ this.handleInputChange("searchTerm") } 
          onSearch={ this.search } />
        <div className="App-playlist">
          <SearchResults action={ this.addTrack } searchResults={ this.state.searchResults } />
          <Playlist 
            action={ this.removeTrack } 
            playlistName={ this.state.playlistName } 
            onNameChange={ this.handleInputChange("playlistName") }
            playlistTracks={ this.state.playlistTracks } />
        </div>
      </div>
    </div>
  )
};

export default App;