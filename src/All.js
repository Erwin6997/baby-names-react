import React from 'react';

const All = (props) => {
    const imageClick = () => {
        props.setBabyName (props.data.filter( item => item.sex === 'f' && item.sex === 'm'))
    }
    return (
        <div>
            <img className="icons" src='https://f0.pngfuel.com/png/371/784/two-baby-girl-and-boy-illustration-png-clip-art.png' 
            onClick = {() => imageClick()} height="80" alt=''>
            </img>
        </div>
    )
} 

export default All;