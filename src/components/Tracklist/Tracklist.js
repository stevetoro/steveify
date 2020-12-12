import React from 'react';
import Track from '../Track/Track';
import './Tracklist.css';

const Tracklist = ({ tracks, action, removable }) => (
  <div className="TrackList">
    { tracks.map(track => <Track key={ track.id } track={ track } action={ action } removable={ removable } />) }
  </div>
);

export default Tracklist;