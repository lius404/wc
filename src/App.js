import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'

class App extends React.Component {
  render(){
    return (
      <div>
        {this.props.children}
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
