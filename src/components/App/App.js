import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utils/Spotify';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = async () => {
    const searchResults = await Spotify.search(searchTerm);
    setSearchResults(searchResults);
  }

  const savePlaylist = async () => {
    const uris = playlistTracks.map(track => track.uri);
    await Spotify.savePlaylist(playlistName, uris);
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
  }

  const addTrack = track => () => {
    if (!playlistTracks.some(_track => _track.id == track.id))
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
  }

  const removeTrack = track => () => {
    setPlaylistTracks(prevTracks => prevTracks.filter(_track => _track.id != track.id))
  }

  const handleSearchTermChange = searchTerm => setSearchTerm(searchTerm)

  const handlePlaylistNameChange = playlistName => setPlaylistTracks(playlistName)

  return (
    <div>
      <h1>steve<span className="highlight">ify</span></h1>
      <div className="App">
        <SearchBar 
          searchTerm={ searchTerm }
          onTermChange={ handleSearchTermChange }
          onSearch={ search } />
        <div className="App-playlist">
          <SearchResults action={ addTrack } searchResults={ searchResults } />
          <Playlist 
            action={ removeTrack } 
            playlistName={ playlistName } 
            onNameChange={ handlePlaylistNameChange }
            playlistTracks={ playlistTracks }
            onSave={ savePlaylist } />
        </div>
      </div>
    </div>
  )
};

export default App;