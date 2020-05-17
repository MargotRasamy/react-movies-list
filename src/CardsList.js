import React, { Component, Fragment } from 'react';
import './css/Card.css';
import { connect } from 'react-redux';
import Card from './Card';
import Filter from './Filter';
import { deleteMovie } from '../src/redux/actions/moviesActions';
import { likeMovie } from '../src/redux/actions/moviesActions';
import { dislikeMovie } from '../src/redux/actions/moviesActions';
import Pagination from './Pagination';


class CardsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            liked : false,
            categoryIsSelected : false,
            categorySelected : '',
            paginationIsSelected : false,
            moviesPerPage : 12,
            currentPage : 1
        }
        this.categorySelect = this.categorySelect.bind(this);
        this.toggle = this.toggle.bind(this);
        this.changeMoviesPerPage = this.changeMoviesPerPage.bind(this)
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

    changeMoviesPerPage(e){
        e.preventDefault();
        const target = e.target.getAttribute('data-page')
        this.setState({
            paginationIsSelected : true,
            moviesPerPage : target
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

                    if ( movie.category === this.state.categorySelected && this.state.categoryIsSelected ){
                        return (
                             <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                     )}
                     else if ( this.state.categorySelected === "All" && this.state.categoryIsSelected){
                         return (
                             <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                         )
                     }
                     else if (!this.state.categoryIsSelected){
                        return (
                            <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                        )
                     }
                     else return (
                            <Fragment></Fragment> 
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
              <Filter handleCategory={this.categorySelect}/> }
            
            <div className="cards-list p-3 rounded">
            
                {moviesData}

            </div> 
                

            <Pagination />
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