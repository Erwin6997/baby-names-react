  
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
  const filterBySex = (sex) => {
    if (sex === "f") {
      setBabyName (data.filter( item => item.sex === 'f'))
    }else if (sex === "m") {
      setBabyName (data.filter( item => item.sex === 'm'))
    }else{
      setBabyName (data)
    }
  }   
    return (
      <div>
      <Header />
      <div className="App">
        <div className="nav-bar">
          <input className="search" label='Search Names' placeholder="Search names" onChange={Change}></input> 
          <div  className='icons'>
            <Girl onClick={()=> filterBySex("f")} />
            <All onClick={()=> filterBySex("all")} />
            <Boy onClick={()=> filterBySex("m")} />
          </div>
        </div>
        <ShowNames babyNames = {babyName}/>
      </div>
      <Footer />
      </div>
    );
}
export default App;