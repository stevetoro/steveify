import React , { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

const Playlist = () => (
  <div className="Playlist">
    <input value="New Playlist"/>
    <Tracklist removable />
    <a className="Playlist-save">SAVE TO SPOTIFY</a>
  </div>
);

export default Playlist;