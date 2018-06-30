import React , { Component } from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

const Tracklist = ({ removable }) => (
  <div className="TrackList">
    <Track removable={ removable } />
    <Track removable={ removable } />
    <Track removable={ removable } />
  </div>
);

export default Tracklist;