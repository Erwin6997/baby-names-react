  
import React, { useState, useEffect } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ShowNames from './ShowNames';
import Boy from './Boy';
import Girl from './Girl';
import Footer from './Footer';
import All from './All';
import Header from './Header';

const  App = () => {

  const [name, setName] = useState('')
  const [babyName, setBabyName] = useState ([])

  const Change = e => {
    setName((e.target.value).toLowerCase())
  }

  useEffect( () => {
    setBabyName (data.filter( item => item.name.toLowerCase().includes(name)))
  }, [name])

    return (
      <div>
      <Header />
      <div className="App">
        <div className="nav-bar">
          <input className="search" label='Search Names' placeholder="Search names" onChange={Change}></input> 
          <div  className='icons'>
            <Girl data={data} setBabyName={setBabyName} />
            <All data={data} setBabyName={setBabyName} />
            <Boy data={data} setBabyName={setBabyName} />
          </div>
        </div>
        <ShowNames babyNames = {babyName}/>
      </div>
      <Footer />
      </div>
    );
}
export default App;