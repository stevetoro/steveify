import React , { Component } from 'react';
import './Track.css';

class Track extends Component {
  renderAction = () => {
    if (this.props.removable)
      return <a className="Track-action">-</a>;
    
    return <a className="Track-action">+</a>
  }
  
  render = () => (
    <div className="Track">
      <div className="Track-information">
        <h3>Track Name</h3>
        <p>Track Artist | Track Album</p>
      </div>
      { this.renderAction() }
    </div>
  )
}

export default Track;