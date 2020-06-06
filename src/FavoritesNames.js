import React, { useState } from "react";


const FavoriteNames = (props) => {
  return (
        <div className="favorites">
          <h3>Favorites: </h3>
          {props.names.map((name) => (
            <span
              key={name.id}
              className={name.sex}
              onClick={() => props.remove(name)}>
              {name.name}
            </span>
          ))}
        </div>
  );
};

export default FavoriteNames;