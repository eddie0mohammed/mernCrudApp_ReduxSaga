
import * as actionTypes from './ActionTypes';

export const getPosts = () => {
    return {
        type: actionTypes.REQUEST_GET_POST
    }
}

export const addPost = (title, article) => {
    return {
        type: actionTypes.REQUEST_ADD_POST,
        title, 
        article
    }
}


export const deletePost = (id) => {
    return {
        type: actionTypes.REQUEST_DELETE_POST,
        id
    }
}


export const editPost = (title, article, id) => {
    return {
        type: actionTypes.REQUEST_EDIT_POST,
        title,
        article,
        id
    }
}