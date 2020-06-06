import React, { useState } from "react";


const FavoriteNames = (props) => {
  console.log(props.names.id+"gggg props");
  return (
      <div className="container">
        <div className="favorites">
          <span>Favorites: </span>
          {props.names.map((name) => (
            <span
              key={name.id}
              className={name.sex}
              onClick={() => props.remove(name)}>
              {name.name}
            </span>
          ))}
        </div>
      </div>
  );
};

export default FavoriteNames;