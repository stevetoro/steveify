import React from 'react';
import './Track.css';

const Track = ({ track, action, removable }) => (
  <div className="Track">
    <div className="Track-row">
      <div className="Track-artwork">
        <img src={ track.image } />
      </div>
      <div className="Track-information">
        <h3>{ track.name }</h3>
        <p>{ track.artist } | { track.album }</p>
      </div>
      <a className="Track-action" onClick={ action(track) } >{ removable ? "-" : "+" }</a>
    </div>
    {
      track.preview && 
      <div className="Track-player">
        <audio controls>
          <source src={ track.preview } type="audio/mpeg" />
        </audio>
      </div> 
    }
  </div>
);

export default Track;