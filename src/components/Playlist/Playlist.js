import React , { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = ({ playlistName, playlistTracks, action }) => (
  <div className="Playlist">
    <input value={ playlistName } />
    <Tracklist tracks={ playlistTracks } action={ action } removable />
    <a className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
);

export default Playlist;