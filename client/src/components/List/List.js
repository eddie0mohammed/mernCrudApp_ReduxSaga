import React, { Component } from 'react';

import styles from './List.module.css';

import {connect} from 'react-redux';

import * as postActionCreators from '../../Redux/Actions/PostActionCreators';

class List extends Component {

    renderPosts = () => {
        return this.props.posts.map((post, i) => {
            return (
                <div key={i} className={styles.post}>
                    <p>{post.title}</p>
                    <p>{post.article}</p>
                    <div className={styles.edit} onClick={() => this.props.toggleEdit(post._id)}>Edit</div>
                    <div className={styles.delete} onClick={() => this.props.deletePost(post._id)}>Delete</div>
                </div>
            )
        });
    }

    render() {
        
        return (
            <div className={styles.container}>
                {this.renderPosts()}
                
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
        deletePost: (id) => dispatch(postActionCreators.deletePost(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);