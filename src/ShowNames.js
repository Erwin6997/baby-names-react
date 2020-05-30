import React from "react";

const ShowNames = (props) => {
  console.log(props + "peraps")

  return (
    <div className="Container">
      {
        props.babyNames.sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((element,index) => {
            return ( <p className={element.sex}>{element.name}</p>
            );  
          })
        }
    </div>
  );
}; 

export default ShowNames;