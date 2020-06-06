import React from 'react';

const Girl = (props) => {
    return (
        <div>
            <img className="icons" 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCQ9BQE3FJ2VpVYpUAkofWygTlPBan1tgLIWVvP5kuca50iXvQ&usqp=CAU' 
            onClick={props.onClick} height="80" ></img>
        </div>
    )
} 

export default Girl;