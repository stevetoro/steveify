import React , { Component } from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

const Tracklist = () => (
  <div className="TrackList">
    <Track />
    <Track />
    <Track />
  </div>
);

export default Tracklist;