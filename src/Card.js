import React, { Component } from 'react';
import './css/Card.css';
// import deleteBtn from './images/icons/delete-icon.svg';

class Card extends Component {
  render() {
    const valueMax = this.props.likes + this.props.dislikes
    // Nombre de likes en pourcentage
    const valueNow = (this.props.likes * 100) / valueMax
    return (
      <div className="cardElement d-flex flex-column justify-content-center p-3">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-category">{this.props.category}</p>
          <div className="progress mx-auto" style={{height: 1 + 'px', width: 100 + '%'}}>
            <div className="progress-bar progress-background" role="progressbar" style={{width: valueNow + '%'}} aria-valuenow={valueNow} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          {/* Bouton supprimer */}
          <button className="icon-buttons d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
          </button>
      </div>
    )
  }
}


  
  export default Card;