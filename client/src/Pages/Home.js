import React, { Component } from 'react';

import styles from './Home.module.css';

import List from '../components/List/List';

import {connect} from 'react-redux';
import * as postActionCreators from '../Redux/Actions/PostActionCreators';

class Home extends Component {


    state = {
        title: '',
        article: '',
        showEdit: false,
        id: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    formSubmit = async (e) => {
        e.preventDefault();
        // console.log(this.state);
        if (this.state.showEdit){
            await this.props.editPost(this.state.title, this.state.article, this.state.id);
        }else{
            await this.props.addPost(this.state.title, this.state.article);
        }
        this.setState({title: '', article: '', showEdit: false, id: ''});
    }

    toggleEdit = (id) => {
        const selectedPost = this.props.posts.filter(elem => elem._id === id)[0];
        this.setState({
            id: selectedPost._id,
            title: selectedPost.title,
            article: selectedPost.article,
            showEdit: !this.state.showEdit
        });
        
    }

    render() {
        // console.log(this.state);
        return (

            <div>
                <h1>Home</h1>
                <form className={styles.form} onSubmit={this.formSubmit}>
                    <input type="text" name='title' placeholder="Title"  onChange={this.inputChangeHandler} value={this.state.title}/>
                    <input type="text" name='article' placeholder="Article"  onChange={this.inputChangeHandler} value={this.state.article}/>
                    <input type="submit" value={`${this.state.showEdit ? 'SAVE' : 'ADD'}`}/>
                </form>
                <div>
                    <List toggleEdit={this.toggleEdit}/>
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (title, article) => dispatch(postActionCreators.addPost(title, article)), 
        editPost: (title, article, id) => dispatch(postActionCreators.editPost(title, article, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);