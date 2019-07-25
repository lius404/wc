import React from 'react';
// import logo from './logo.svg';
<<<<<<< HEAD
import './App.css';
import Navbar from './Components/Navbar'

=======
import './App.css'
>>>>>>> f97cfaecbbcf486fe5ec8c2f5cdf153e51db6d17
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
