  
import React, { useState, useEffect } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ShowNames from './ShowNames';
import Boy from './Boy';
import Girl from './Girl';
import Footer from './Footer';
import All from './All';

const  App = () => {

  const [names, setName] = useState('')
  const [babyName, setBabyName] = useState ([])

  const Change = e => {
    setName((e.target.value).toLowerCase())
  }

  useEffect( () => {
    setBabyName (data.filter( item => item.name.toLowerCase().includes(names)))
  }, [names])

    return (
      <div>
        <div className="App2">
      <header className="App-header">
        <img
          className="App-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsX1PY7OFfBOMRk7jpYfAjGVMmC18Kab1WDMeDwKMXR7mcajMr&usqp=CAU"
        />
      </header>
      </div>
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