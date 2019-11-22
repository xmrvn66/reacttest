import React from 'react';
import Card from './Card.js';

const CardLists = ({ robots }) => {
    
     
    return (
    //Create Loop to go through the robot.js file and add to an array with the information
    //We create an Cards-Array
    // We have to attach a unique key to a loop, so that react knows which component to render
    // Everything in curly brackets is javascript 
    //Code to be returned creates the card components based on the input through robots.js
    <div>
        {
        robots.map((user, i) => {
            return (
            <Card  
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}/>
            )
        })
        }
    </div> 

    );
}

export default CardLists;