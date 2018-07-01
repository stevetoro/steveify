import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';
import './App.css';

class App extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    playlistName: 'New Playlist',
    playlistTracks: []
  }

  search = async () => {
    const searchResults = await Spotify.search(this.state.searchTerm);
    this.setState({ searchResults });
  }

  savePlaylist = async () => {
    const uris = this.state.playlistTracks.map(track => track.uri);
    await Spotify.savePlaylist(this.state.playlistName, uris);
    this.setState({ playlistName: 'New Playlist', playlistTracks: [] });
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
            playlistTracks={ this.state.playlistTracks }
            onSave={ this.savePlaylist } />
        </div>
      </div>
    </div>
  )
};

export default App;