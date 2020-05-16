const initState = {
  movies : [
      {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1
      }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0
      }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1
      }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6
      }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2
      }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3
      }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32
      }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1
      }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1
      }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12
      },
    ]

}

  
// const movies$ = new Promise((resolve, reject) => setTimeout(resolve(movies), 100, movies))


const rootReducer = (state = initState, action) => {
  
  // delete movie action
  if (action.type === "DELETE_MOVIE") {
    // nouveau state
    let newMovies = state.movies.filter(movie => {
      return action.id !== movie.id;
    })
    return{
      ...state,
      movies: newMovies
    }

  }

  // like a movie
  else if (action.type === "LIKE_MOVIE") {
    // nouveau state
    let newMovies = state.movies.filter(movie => {
      if (action.id === movie.id){
        movie.likes += 1
      }
      return action.id
    })
    return{
      ...state,
      movies: newMovies
    }

  }

  // like a movie
  else if (action.type === "DISLIKE_MOVIE") {
    // nouveau state
    let newMovies = state.movies.filter(movie => {
      if (action.id === movie.id){
        movie.dislikes += 1

      }
      return action.id
    })
    return{
      ...state,
      movies: newMovies
    }

  }


  return state

}

export default rootReducer;

  
//   export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
  