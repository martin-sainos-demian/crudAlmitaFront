import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './comps/Login';
import TitlePass from './comps/TitlePass';
import NewPass from './comps/NewPass';
import GetPass from './comps/GetPass';
import Encoder from './comps/Encoder';
import Register from './comps/Register';


function App() {
  return (
    <div className="App">
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
      <TitlePass></TitlePass>
      <Login id="login"></Login>
      <NewPass></NewPass>
      <GetPass></GetPass>
      <Encoder></Encoder>
      <Register></Register>
        <p id="logId" hidden></p>
    </div>
  );
}

export default App;