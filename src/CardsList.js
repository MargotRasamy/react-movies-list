import React, { Component } from 'react';
import './css/Card.css';
import { connect } from 'react-redux';
import Card from './Card';



class CardsList extends Component {
    render() {
        const { movies } = this.props;
        const moviesData = movies.length ? (
            movies.map(
                (movie) => {
                    return (
                        <Card title={movie.title} category={movie.category}/>
                    )
                }
            )
              
        )
        : (
            <p>Aucun film</p>
        );
    
        return (
        <div className="container">

            <div className="cards-list p-3 rounded">
                {moviesData}
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
    
    export default connect(mapStateToProps)(CardsList);