import React , { Component } from 'react';
import './Track.css';

const Track = () => (
  <div className="Track">
    <div className="Track-information">
      <h3>Track Name</h3>
      <p>Track Artist | Track Album</p>
    </div>
    <a className="Track-action">+ or -</a>
  </div>
);

export default Track;