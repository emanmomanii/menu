import React, { Component } from 'react';
import './App.css';
import Mycomp from './Mycomp/Mycomp';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Mycomp />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
