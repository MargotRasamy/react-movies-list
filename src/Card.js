import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Card.css';


class Card extends Component {
  render() {
    return (
      <div className="cardElement d-flex flex-column justify-content-center">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-category">{this.props.category}</p>

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