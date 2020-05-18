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
            currentPage : 1,
            totalPageNumber : 1,
            changedPage : false
        }
        this.categorySelect = this.categorySelect.bind(this);
        this.toggle = this.toggle.bind(this);
        this.changeMoviesPerPage = this.changeMoviesPerPage.bind(this);

        this.changePage = this.changePage.bind(this);
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
            moviesPerPage : target,
            totalPageNumber : Math.ceil(this.props.movies.length / target),
            currentPage : 1
        })
    }


    changePage(e){
        e.preventDefault();
        const target = e.target.getAttribute('data-page')
        let currentPageCount = this.state.currentPage
        if ((target === "previous") && (currentPageCount > 1)) {
            currentPageCount = this.state.currentPage - 1
        }
        else if ((target === "next")  && (currentPageCount < this.state.totalPageNumber)) {
            currentPageCount = this.state.currentPage + 1
        }
        console.log(currentPageCount)
        this.setState({
            changePage : true,
            currentPage : currentPageCount
        })
    }

    

    
    render() {
        
        const { movies } = this.props;

         // moviesData
         const moviesData = movies.length ? (  

            movies.filter(
                (movie) => {

                
                    // Filter per category
                    if ( (movie.category === this.state.categorySelected) && this.state.categoryIsSelected){
                        return (
                            movie
                    )}

                    // ALL category
                    else if (this.state.categorySelected === "All" && this.state.categoryIsSelected){
                        return (
                            movie
                        )
                    }
                    // No filter selected
                    else if (!this.state.categoryIsSelected){
                        
                        return (
                            movie
                        )                    
                    }
                    // Pagination selected
                    else if (this.state.changedPage){
                        
                        return (
                            movie
                        )                    
                    }
                    else {
                        return null
                    }
                }   
            )     
        )// If there are no movies
        : (
           []
        )

        // Paginator
        const renderMoviesPages = (moviesData) => {
            const moviesList = moviesData
            if (moviesData === [] ||  moviesData === null) {
                return moviesData
            }
            else {     
                var allPages = []
                let limitPage 
                let startPage
                for (let i = 0 ; i < this.state.totalPageNumber; i++) {
                    limitPage = (this.state.moviesPerPage * (i+1)) 
                    startPage = (this.state.moviesPerPage) * i
                    allPages[i] = moviesList.slice(startPage, limitPage)
                }
                return allPages[this.state.currentPage - 1]
            }
        }

        
        // pagination movies selectes
        const moviesSelectedPagination = renderMoviesPages(moviesData).map(
            movie => {
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

                // Filter per category
                if ( (movie.category === this.state.categorySelected) && this.state.categoryIsSelected){
                    return (
                         <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                 )}

                // ALL category
                  else if (this.state.categorySelected === "All" && this.state.categoryIsSelected){
                    return (
                        <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                    )
                }
                // No filter selected
                else if (!this.state.categoryIsSelected){
                    
                    return (
                        <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                    )                    
                }
                // Pagination selected
                else if (this.state.changedPage){
                    
                    return (
                        <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} delete={handleDelete} toggle={handleToggle}/>    
                    )                    
                }  

                else {
                    return (
                        <Fragment></Fragment>
                    )
                }
          
            }
        )

        return (
        <div className="container">
            { movies.length > 0 &&
              <Filter handleCategory={this.categorySelect}/> }
            <div className="cards-list p-3">
                {   !this.props.movies.length &&
                <p> No movies</p>}
                {moviesSelectedPagination}
            </div> 
            <Pagination changeMoviesPerPage={this.changeMoviesPerPage} changePage={this.changePage}/>
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