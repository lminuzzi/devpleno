import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css'
import Counter from './Counter'
import Home from './Home'
import Sobre from './Sobre'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    
    setInterval(() => {
      this.setState({ counter: this.state.counter+1 })
    }, 1000)
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <p>
              <Link to="/">Home</Link><br/>
              <Link to="/sobre">Sobre</Link>
            </p>
          </header>
          <p className="App-intro">
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={Sobre} />
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
