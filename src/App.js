  
import React, { useState, useEffect } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ShowNames from './ShowNames';
import Header from './Header';
import FavoritesNames from "./FavoritesNames";
import Footer from './Footer';

const  App = () => {
  const [name, setName] = useState('');
  const [babyNames, setBabyNames] = useState ([]);
  const [updateData , setUpdateData] = useState([]);
  const [favoriteNames, setFavoriteNames] = useState([]);

  const Change = e => {
    setName((e.target.value).toLowerCase())
  }

  useEffect( () => {
    setBabyNames(data.filter( item => item.name.toLowerCase().includes(name)))
    setUpdateData(data.filter( item => item.name.toLowerCase().includes(name)))
  }, [name])
  
  const favorite = (value) =>{
    setFavoriteNames([...favoriteNames, value]);
    const addNames = babyNames.filter(name => name.id !== value.id);
    setBabyNames(addNames)
    setUpdateData(addNames)
  }
  const removeFavorites = value => {
    const updatedFavoriteNames = favoriteNames.filter(name => name.id !== value.id);
    setFavoriteNames(updatedFavoriteNames);
    babyNames.forEach((name) => { 
      if (name.sex === value.sex){
        const updatedNames = [...babyNames, value];
        setBabyNames(updatedNames)
        setUpdateData(updatedNames)
      }
    });
    }
    
  const filterBySex = (sex) => {
    if (sex === "f") {
      setBabyNames(updateData.filter( item => item.sex === 'f'))
    }else if (sex === "m") {
      setBabyNames(updateData.filter( item => item.sex === 'm'))
    }else{
        setBabyNames(updateData)
          }
        }
    
  
    return (
      <div>
      <Header />
      <div className="App">
        <div className="nav-bar">
          <input className="search" placeholder="Search names" onChange={Change}></input>
          <div  className='icons'>
            <input type="radio" onClick={()=> filterBySex("m")} name="gender" value="male"></input><label>Boy</label>
            <input type="radio" onClick={()=> filterBySex("f")} name="gender" value="female"></input><label>Girl</label>
            <input type="radio" onClick={()=> filterBySex("all")} name="gender" value="all"></input><label>All</label>
          </div>
          <div>
          <FavoritesNames names={favoriteNames} remove={removeFavorites} />
          </div>
        </div>
        <ShowNames babyNames={babyNames} add={favorite}/>
      </div>
      <Footer />
      </div>
    );
}
export default App;