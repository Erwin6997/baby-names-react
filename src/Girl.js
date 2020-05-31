import React from 'react';

const Girl = (props) => {
    const imageClick = () => {
        props.setBabyName (props.data.filter( item => item.sex === 'f'))
      }    

    return (
        <div>
            <img className="icons" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCQ9BQE3FJ2VpVYpUAkofWygTlPBan1tgLIWVvP5kuca50iXvQ&usqp=CAU' 
            onClick = {() => imageClick()} height="80" ></img>
        </div>
    )
} 

export default Girl;