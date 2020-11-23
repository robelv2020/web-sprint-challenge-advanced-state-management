import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { fetchSmurfs } from '../actions';
import SmurfList from './Smurfs/SmurfList';
import SmurfForm from './Smurfs/SmurfForm';

class App extends Component {
  // array with one smurf returned 
  state = {
    url: `http://localhost:3333/smurfs`
  };

  componentDidMount() {
    this.props.fetchSmurfs(this.state.url);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <h2> Smurfs village!</h2>
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default connect(null, { fetchSmurfs })(App);
