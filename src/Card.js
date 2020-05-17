import React, { Component } from 'react';
import './css/Card.css';
// import deleteBtn from './images/icons/delete-icon.svg';

import Ratings from './Ratings';

class Card extends Component {

  
  render() {
    
    const handleDeleteFunction = this.props.delete
    const handleToggleFunction = this.props.toggle
    const valueMax = this.props.likes + this.props.dislikes
    // Nombre de likes en pourcentage
    const valueNow = (this.props.likes * 100) / valueMax
    return (
      <div className="cardElement d-flex flex-column justify-content-center p-3">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-category">{this.props.category}</p>
          <Ratings likesCount={this.props.likes} dislikesCount={this.props.dislikes}/>
          <div className="progress mx-auto" style={{height: 1 + 'px', width: 100 + '%'}}>
            <div className="progress-bar progress-background" role="progressbar" style={{width: valueNow + '%'}} aria-valuenow={valueNow} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          {/* Bouton supprimer */}
          <button className="icon-buttons delete-button d-flex align-items-center justify-content-center" onClick={handleDeleteFunction}>
            <svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
          </button>

          {/* Bouton like/dislike toggle */}
          <button className="icon-buttons toggle-button d-flex align-items-center justify-content-center" onClick={handleToggleFunction}>
            <svg className="icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.308 11.794c.418.056.63.328.63.61 0 .323-.277.66-.844.705-.348.027-.434.312-.016.406.351.08.549.326.549.591 0 .314-.279.654-.913.771-.383.07-.421.445-.016.477.344.026.479.146.479.312 0 .466-.826 1.333-2.426 1.333-2.501.001-3.407-1.499-6.751-1.499v-4.964c1.766-.271 3.484-.817 4.344-3.802.239-.831.39-1.734 1.187-1.734 1.188 0 1.297 2.562.844 4.391.656.344 1.875.468 2.489.442.886-.036 1.136.409 1.136.745 0 .505-.416.675-.677.755-.304.094-.444.404-.015.461z"/></svg>
          </button>

      </div>
    )
  }
}


  
  export default Card;