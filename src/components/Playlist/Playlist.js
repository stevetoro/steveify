import React , { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = ({ playlistName, onNameChange, playlistTracks, action }) => (
  <div className="Playlist">
    <input value={ playlistName } onChange={ event => onNameChange(event.target.value) } />
    <Tracklist tracks={ playlistTracks } action={ action } removable />
    <a className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
);

export default Playlist;