
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {

    posts: []
}

const postReducer = (state = initialState, action) => {

    switch (action.type){

        case (actionTypes.RECEIVE_GET_POST):
            // console.log(action);
            return {
                ...state,
                posts: action.data.data.posts
            }

        case (actionTypes.RECEIVE_ADD_POST):
            const newPosts = [...state.posts, action.payload]
            return {
                ...state,
                posts: newPosts
            }

        case (actionTypes.RECEIVE_DELETE_POST):
            const updatedPosts = [...state.posts].filter(elem => elem._id !== action.payload);
            return {
                ...state,
                posts: updatedPosts
            }

        case (actionTypes.RECEIVE_EDIT_POST):
            // const updatedPost = action.payload;
            const index = state.posts.findIndex(elem => elem._id === action.payload._id);
            const newUpdatedPosts = [...state.posts];
            newUpdatedPosts[index] = action.payload;
            return {
                ...state,
                posts: newUpdatedPosts

            }

        default:
            return state;
    }
}

export default postReducer;