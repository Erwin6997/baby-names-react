import React from 'react';

const Boy = (props) => {
    const imgClick = () => {
        props.setBabyName (props.data.filter( item => item.sex === 'm'))
      }  
    return (
        <div className='baby-icons'>
            <img className="baby-boy-icon" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMZPD3PNrE0awWMqGS_gz8pSm9ABqwEkvmtp6h9koZY6VyZWnn&usqp=CAU' onClick = {() => imgClick()} height="80" alt=''></img>
        </div>
    )
} 

export default Boy;