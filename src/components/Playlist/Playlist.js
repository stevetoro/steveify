import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = ({ playlistTracks, action, saveSpotifyPlaylist }) => {
  const [playlistName, setPlaylistName] = useState('New Playlist')

  const handlePlaylistNameChange = ({ target }) => setPlaylistName(target.value)

  const handleSavePlaylist = () => {
    saveSpotifyPlaylist(playlistName, playlistTracks);
    setPlaylistName('New Playlist');
  }

  return (
    <div className="Playlist">
      <input value={ playlistName } onChange={ handlePlaylistNameChange } />
      <Tracklist tracks={ playlistTracks } action={ action } removable />
      <a className="Playlist-save" onClick={ handleSavePlaylist }>SAVE TO SPOTIFY</a>
    </div>
  );
};

export default Playlist;