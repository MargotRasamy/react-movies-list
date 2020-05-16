export const deleteMovie = (id) => {
    return {
        type : "DELETE_MOVIE",
        id : id
    }
}

export const likeMovie = (id) => {
    return {
        type : "LIKE_MOVIE",
        id : id
    }
}

export const dislikeMovie = (id) => {
    return {
        type : "DISLIKE_MOVIE",
        id : id
    }
}
