import React from 'react';
import Navbar from '../../navbar';
import App from './App';
import './index.index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer/>
        <Home/>
      </div>
    );
  }
}

export default App;