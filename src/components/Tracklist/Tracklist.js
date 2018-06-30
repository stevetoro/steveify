import React , { Component } from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

const Tracklist = ({ tracks, removable }) => (
  <div className="TrackList">
    { tracks.map(track => <Track key={ track.id } track={ track } removable={ removable } />) }
  </div>
);

export default Tracklist;