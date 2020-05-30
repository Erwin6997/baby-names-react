import React from 'react';
import logo from './logo.svg';
import './App.css';
import BabyNamesData from "./babyNamesData.json"
import ShowNames from './ShowNames.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Baby React Names
        </p>
      </header>
      <div className="App">
        <ShowNames BabyNames={BabyNamesData}/>      
      </div>
    </div>
  );
}
export default App;
