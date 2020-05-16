import React, { Component } from 'react';
import likes from './images/icons/like.svg';
import dislikes from './images/icons/dislike.svg';

class Ratings extends Component {
    render() {
  return (
    <div className="ratings d-flex justify-content-around m-2">
            <span className="progress-likes d-flex justify-content-between align-items-center">
              <img className="icons mr-2" src={likes} alt="likes"/>
               <span>{this.props.likesCount} likes</span> 
            </span>
            <span className="progress-dislikes d-flex justify-content-between align-items-center">
                <img className="icons mr-2" src={dislikes} alt="dislikes"/>
                <span>{this.props.dislikesCount} dislikes</span>
            </span>
    </div>
  );
}
}

export default Ratings;