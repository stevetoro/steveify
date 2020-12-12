import React from 'react';
import './Track.css';

const Track = ({ track, action, removable }) => (
  <div className="Track">
    <div className="Track-information">
      <h3>{ track.name }</h3>
      <p>{ track.artist } | { track.album }</p>
    </div>
    <a className="Track-action" onClick={ action(track) } >{ removable ? "-" : "+" }</a>
  </div>
);

export default Track;