import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchSpotify = async (searchTerm) => {
    const searchResults = await Spotify.search(searchTerm);
    setSearchResults(searchResults);
  }

  const saveSpotifyPlaylist = async (name, tracks) => {
    const uris = tracks.map(track => track.uri);
    await Spotify.savePlaylist(name, uris);
    setPlaylistTracks([]);
  }

  const addTrack = track => () => {
    if (!playlistTracks.some(_track => _track.id == track.id))
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
  }

  const removeTrack = track => () => {
    setPlaylistTracks(prevTracks => prevTracks.filter(_track => _track.id != track.id))
  }

  return (
    <div>
      <h1>steve<span className="highlight">ify</span></h1>
      <div className="App">
        <SearchBar searchSpotify={ searchSpotify } />
        <div className="App-playlist">
          <SearchResults action={ addTrack } searchResults={ searchResults } />
          <Playlist 
            action={ removeTrack } 
            playlistTracks={ playlistTracks }
            saveSpotifyPlaylist={ saveSpotifyPlaylist } />
        </div>
      </div>
    </div>
  )
};

export default App;