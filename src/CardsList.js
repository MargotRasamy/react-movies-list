import React, { Component } from 'react';
import './css/Card.css';
import { connect } from 'react-redux';
import Card from './Card';
import { deleteMovie } from '../src/redux/actions/moviesActions';
import { likeMovie } from '../src/redux/actions/moviesActions';
import { dislikeMovie } from '../src/redux/actions/moviesActions';

let liked = false;

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
                    
                    // Toggle like/dislike movie
                    const handleToggle = () => {
                        
                        if (liked === false){
                            this.props.likeMovie(movie.id);
                            liked = true
                        }
                        else if (liked === true) {
                            this.props.dislikeMovie(movie.id);
                            liked = false;
                            
                        }
                        
                    }

                    return (
                        <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>
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
            dispatch(deleteMovie(id))
        }
        ,
        likeMovie : (id) => {
            dispatch(likeMovie(id))
        }
        ,
        dislikeMovie : (id) => {
            dispatch(dislikeMovie(id))
        }
    }
  }

    export default connect(mapStateToProps, mapDispatchToProps)(CardsList);