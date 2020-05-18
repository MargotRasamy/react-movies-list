import React, { Component } from 'react';
import { connect } from 'react-redux';


class Pagination extends Component {


    render() {
        return (
            <nav className="d-flex justify-content-center m-4" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link pagination-select" data-page="previous" onClick={this.props.changePage} href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="4" onClick={this.props.changeMoviesPerPage} href="#">4</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="8" onClick={this.props.changeMoviesPerPage} href="#">8</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="12" onClick={this.props.changeMoviesPerPage} href="#">12</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="next" onClick={this.props.changePage} href="#">Next</a></li>
                </ul>
            </nav>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      movies: state.movies
    }
}

export default connect(mapStateToProps)(Pagination);