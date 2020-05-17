import React, { Component } from 'react';
import './css/Card.css';
import { connect } from 'react-redux';
import Card from './Card';
import Filter from './Filter';
import { deleteMovie } from '../src/redux/actions/moviesActions';
import { likeMovie } from '../src/redux/actions/moviesActions';
import { dislikeMovie } from '../src/redux/actions/moviesActions';



class CardsList extends Component {

    // state
    state = {
        liked : false,
   
    }

    toggle = () => {
        this.setState({
            liked: !this.state.liked
        })
    }
    

    render() {
        
        const { movies } = this.props;

        // card movies data
        const moviesData = movies.length ? (
            
            movies.map(
                (movie) => {
                    // Deleting movie
                    const handleDelete = () => {
                        this.props.deleteMovie(movie.id);
                    }
                    
                    // Toggle like/dislike movie
                    const handleToggle = () => {
                        
                        if (!this.state.liked){
                            this.props.likeMovie(movie.id);
                            this.toggle()
                           
                        }
                        else {
                            this.props.dislikeMovie(movie.id);
                            this.toggle()
                            
                        } 
                    }

                    return (
                            <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                    )
                }
                
            )
              
        )

        // If there are no movies
        : (
            <p>No movies</p>
        )

    
        return (
        <div className="container">

            { movies.length > 0 &&
              <Filter  /> }
            
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