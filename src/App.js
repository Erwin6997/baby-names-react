  
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
  const [updateData , setUpdateData] = useState([]);
  const [favoriteNames, setFavoriteNames] = useState([]);

  const Change = e => {
    setName((e.target.value).toLowerCase())
  }

  useEffect( () => {
    setUpdateData(data.filter( item => item.name.toLowerCase().includes(name)))
  }, [name])
  
  const finalBabyNames = (updateData.filter( item => item.name.toLowerCase().includes(name) && item.sex !== sex));
  
  const favorite = (value) =>{
    setFavoriteNames([...favoriteNames, value]);
    const addNames = data.filter(name => name.id !== value.id);
    setUpdateData(addNames)
  }
  const removeFavorites = value => {
    const updatedFavoriteNames = favoriteNames.filter(name => name.id !== value.id);
    setFavoriteNames(updatedFavoriteNames);
    const updatedNames = [...updateData, value];
    setUpdateData(updatedNames)
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
            <input type="radio" onClick={()=> filterBySex("f")} name="gender" value="male"></input><label>Boy</label>
            <input type="radio" onClick={()=> filterBySex("m")} name="gender" value="female"></input><label>Girl</label>
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