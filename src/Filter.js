import React, { Component } from 'react';
import { connect } from 'react-redux';


class Filter extends Component {
    
    
    

    render() {

          
        const { movies } = this.props;

        // For loop to identify the different categories
        const moviesCategoryList = ["All"]
        for (let i = 0; i < movies.length; i++) {
            if (!moviesCategoryList.includes(movies[i].category)) {
                moviesCategoryList.push(movies[i].category)
            }
        }

        // card movies categories
        const dropdownCategories = moviesCategoryList.length ? (
            
            moviesCategoryList.map(
                (category) => {
                    
                    return (
                        <a className="dropdown-item" alt="dropdown-category" href="#" data-category={category} onClick={this.props.handleCategory.bind(this)}>{category}</a>
                    )
                }   
            )
        )

        // If there are no movies
        : (
             <a className="dropdown-item" alt="dropdown-category" href="#">No categories</a>
        )

        return (
            <div className="Filter dropdown container row mx-0 mb-5 d-flex justify-content-end">
         
                <button className="btn btn-select dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter movies
                </button>
                <div className="dropdown-menu drop-down" aria-labelledby="dropdownMenuButton">
                    {dropdownCategories}
                </div>
            
            </div>
        );
}
}


const mapStateToProps = (state) => {
    return {
      movies: state.movies
    }
}

export default connect(mapStateToProps)(Filter);
