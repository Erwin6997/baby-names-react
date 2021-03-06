import React from "react";

const ShowNames = (props) => {
  props.babyNames.sort((a, b) => (a.name > b.name ? 1 : -1))
  return (
    <div className="Container">
      {props.babyNames.map((element,index) => {
        return(
          <p 
          key={index}
          onClick={() => props.add(element)}
          className={element.sex} >
          {element.name}
          </p>
        );  
        })}
    </div>
  );
}; 

export default ShowNames;