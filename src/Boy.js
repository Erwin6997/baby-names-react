import React from 'react';

const Boy = (props) => {
    return (
        <div>
            <img className="icons" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMZPD3PNrE0awWMqGS_gz8pSm9ABqwEkvmtp6h9koZY6VyZWnn&usqp=CAU' 
            onClick = {props.onClick} height="80" alt=''></img>
        </div>
    )
} 

export default Boy;