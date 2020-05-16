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
                    // Deleting movie
                    const handleDelete = () => {
                        this.props.deleteMovie(movie.id);
                    }
                    return (
                        <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete}/>
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
        movies: state.movies
      }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie : (id) => {
            dispatch({
                type : "DELETE_MOVIE",
                id : id
            })
        }
    }
  }

    export default connect(mapStateToProps, mapDispatchToProps)(CardsList);