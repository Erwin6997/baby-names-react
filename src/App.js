  
import React, { useState, useEffect } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ShowNames from './ShowNames';
import Boy from './Boy';
import Girl from './Girl';
import Footer from './Footer';
import All from './All';
import Header from './Header';
import FavoritesNames from "./FavoritesNames";
const  App = () => {

  const [name, setName] = useState('')
  const [babyName, setBabyName] = useState ([])
  const [favoriteNames, setFavoriteNames] = useState([]);

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
  const favorite = (value) =>{
    setFavoriteNames([...favoriteNames, value]);
    const addNames = babyName.filter(name => name.id !== (value.id));
    setBabyName(addNames)
  }
  const removeFavorites = value => {
    const updatedFavoriteNames = favoriteNames.filter(name => name.id !== value.id);
    setFavoriteNames(updatedFavoriteNames);
    const updatedNames = [...babyName, value];
    setBabyName(updatedNames)
  };
    return (
      <div>
      <Header />
      <div className="App">
        <div className="nav-bar">
          <input className="search" placeholder="Search names" onChange={Change}></input>
          <div  className='icons'>
            <Girl onClick={()=> filterBySex("f")} />
            <All onClick={()=> filterBySex("all")} />
            <Boy onClick={()=> filterBySex("m")} />
          </div>
          <div>
          <FavoritesNames names={favoriteNames} remove={removeFavorites} />
          </div>
        </div>
        <ShowNames babyNames={babyName} add={favorite}/>
      </div>
      <Footer />
      </div>
    );
}
export default App;