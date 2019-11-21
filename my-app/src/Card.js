import React from 'react';

const Card = (props) => {
    //You can only ever return 1 Element!!
    return ( 
    
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt = 'robot'
        src = "https://robohash.org/test1?200x200" />
        <div>
        <h2 > {props.name} </h2> 
        <p> {props.email} </p> 
        </div> 
        </div>
    );
}

export default Card;