import React, { Component } from 'react';
import './css/Card.css';
import { connect } from 'react-redux';
import Card from './Card';
import Filter from './Filter';
import { deleteMovie } from '../src/redux/actions/moviesActions';
import { likeMovie } from '../src/redux/actions/moviesActions';
import { dislikeMovie } from '../src/redux/actions/moviesActions';




class CardsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liked : false,
            categoryIsSelected : false,
            categorySelected : ''
        }
        this.categorySelect = this.categorySelect.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    categorySelect(e) {
        e.preventDefault();
        const targetCategory = e.target.getAttribute('data-category')
        this.setState({
            categoryIsSelected : true,
            categorySelected : targetCategory
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

        // category filtered

        const moviesFiltered = movies.length ? (
            movies.map(
            (movie) => {
       
                if ( movie.category === this.state.categorySelected ){
                   return (
                    <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes}  />    
                )}
                else if ( this.state.categorySelected === "All"){
                    return (
                        <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes}  />    
                    )
                }
            })   
        )
        : (
            <p>No movies</p>
        )

        return (
        <div className="container">
        
            { movies.length > 0 &&
              <Filter handleCategory={this.categorySelect}/> }
            
            <div className="cards-list p-3 rounded">

                {/*  Movies list no filter */}
                { !this.state.categoryIsSelected &&
                moviesData }
                
                {/*  Movies list no filter */}
                { this.state.categoryIsSelected &&
                moviesFiltered }

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