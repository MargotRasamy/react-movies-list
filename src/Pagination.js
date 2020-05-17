import React, { Component } from 'react';
import { connect } from 'react-redux';


class Pagination extends Component {


    render() {
        return (
            <nav className="d-flex justify-content-center m-4" aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link pagination-select" data-page="previous" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="4" href="#">4</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="8" href="#">8</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="12" href="#">12</a></li>
                    <li className="page-item"><a className="page-link pagination-select" data-page="next" href="#">Next</a></li>
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