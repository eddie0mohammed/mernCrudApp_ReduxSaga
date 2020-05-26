
import {put, takeEvery, call} from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../Actions/ActionTypes';




const fetchPosts = async () => {
    try{
        const res = await axios.get(`http://localhost:8080/posts`);
        // console.log(res.data);
        return res.data;

    }catch(err){
        console.log(err);
    }
}

export function*   watchGetPostSaga(){
    yield takeEvery(actionTypes.REQUEST_GET_POST, getPostSaga);
}


function*   getPostSaga(action){

    console.log(action);
    try{
        const data = yield call(fetchPosts);

        yield put({type: actionTypes.RECEIVE_GET_POST, data: data})

    }catch(err){
        console.log(err);
        yield put({type: actionTypes.ERROR});

    }
}


const addPost = async (title, article) => {

    try{
        const config = {
            headers: {
                "Content-Type": 'application/json'
            }
        }
        const body = JSON.stringify({title, article});
        const res = await axios.post(`http://localhost:8080/posts`, body, config);
        // console.log(res);
        return res.data;
        
    }catch(err){
        console.log(err);
    }
}


function*   addPostSaga(action){
    try{
        // console.log(action);
        const response = yield call(addPost, action.title, action.article);
        // console.log(response);

        yield put({type: actionTypes.RECEIVE_ADD_POST, payload: response.data.newPost});

    }catch(err){
        console.log(err);
        yield put({type: actionTypes.ERROR});
    }
}

export function*    watchAddPostSaga(){

    yield   takeEvery(actionTypes.REQUEST_ADD_POST, addPostSaga);
}



const deletePost = async (id) => {

    try{
        await axios.delete(`http://localhost:8080/posts/${id}`);

    }catch(err){
        console.log(err);
    }
}



function*   deletePostSaga(action){

    try{

        yield call(deletePost, action.id);

        yield put({type: actionTypes.RECEIVE_DELETE_POST, payload: action.id});

    }catch(err){
        console.log(err);
    }
}

export function* watchDeletePostSaga(){

    yield takeEvery(actionTypes.REQUEST_DELETE_POST, deletePostSaga);
}


const editPost = async (title, article, id) => {
    
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({title, article});
        const res = await axios.patch(`http://localhost:8080/posts/${id}`, body, config);
        return res.data;

    }catch(err){
        console.log(err);
    }
}


function*   editPostSaga(action){
    console.log(action)
    try{
        const response = yield call(editPost, action.title, action.article, action.id);
        // console.log(response);

        yield put({type: actionTypes.RECEIVE_EDIT_POST, payload: response.data.post});

    }catch(err){
        console.log(err);
        yield put({type: actionTypes.ERROR});
    }

}


export function*    watchEditPostSaga(){
    yield takeEvery(actionTypes.REQUEST_EDIT_POST, editPostSaga);
}