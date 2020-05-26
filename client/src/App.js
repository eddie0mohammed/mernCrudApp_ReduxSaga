import React, {useEffect} from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import {connect} from 'react-redux';
import * as postActionCreators from './Redux/Actions/PostActionCreators';

import Home from './Pages/Home';

function App(props) {

  useEffect(() => {
    props.getPosts();

    // eslint-disable-next-line
  }, []);
 
  return (
    <div className="App">

      <Switch>
        <Route path='/' exact component={Home} />

      </Switch>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(postActionCreators.getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
