import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Card.css';


class Card extends Component {
  render() {
    const valueMax = this.props.likes + this.props.dislikes
    // Nombre de likes en pourcentage
    const valueNow = (this.props.likes * 100) / valueMax
    return (
      <div className="cardElement d-flex flex-column justify-content-center p-3">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-category">{this.props.category}</p>
          <div class="progress mx-auto" style={{height: 1 + 'px', width: 100 + '%'}}>
            <div class="progress-bar progress-background" role="progressbar" style={{width: valueNow + '%'}} aria-valuenow={valueNow} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
      </div>
    )
  }
}



const mapStateToProps = (state) => {
    return {
      movies: state 
    }
}
  
  export default connect(mapStateToProps)(Card);