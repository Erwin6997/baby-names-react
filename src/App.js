  
import React, { useState, useEffect } from 'react';
import './App.css';
import data from './babyNamesData.json';
import ShowNames from './ShowNames';
import Header from './Header';
import FavoritesNames from "./FavoritesNames";
import Footer from './Footer';

const  App = () => {
  const [name, setName] = useState('');
  const [sex ,setSex] = useState("all");
  const [babyNames, setBabyNames] = useState ([]);
  const [favoriteNames, setFavoriteNames] = useState([]);

  const Change = e => {
    setName((e.target.value).toLowerCase())
  }
  let finalBabyNames = data.sort((a, b) => a.name.localeCompare(b.name))

  if(sex === "f" || sex === "m"){ finalBabyNames = data.filter(baby => baby.sex === sex)}
  if(name){finalBabyNames = (data.filter( item => item.name.toLowerCase().includes(name.toLowerCase())))};
  if(name && (sex === "f" || sex === "m")){
    finalBabyNames = data.filter(baby => baby.sex === sex).filter(baby => baby.name.toLowerCase().includes(name.toLowerCase()))
  }
  if(favoriteNames){finalBabyNames = finalBabyNames.filter(  name => favoriteNames.indexOf( name ) < 0 )}

  const favorite = (value) =>{
    setFavoriteNames([...favoriteNames, value]);
    const addNames = data.filter(name => name.id !== value.id);
    setBabyNames(addNames)
  }
  const removeFavorites = value => {
    const updatedFavoriteNames = favoriteNames.filter(name => name.id !== value.id);
    setFavoriteNames(updatedFavoriteNames);
    const updatedNames = [...babyNames, value];
    setBabyNames(updatedNames)
    }
    
  const filterBySex = (selectSex) => {
    setSex(selectSex);
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
        <ShowNames babyNames={finalBabyNames} add={favorite}/>
      </div>
      <Footer />
      </div>
    );
}
export default App;