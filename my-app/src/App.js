import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';



class App extends React.Component{
    // ---------we have an app component with 2 states 'robots and searchfield'
    // ---------a state is what changes in an app, it is what describes the app
    //in the constructor we declare the state
    //state is somethign that can change =/ props
    //state usually lives in the parent component
    constructor(){
        super()
        this.state= {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        //event happens in the <input>
        //everytime the inout changes we get an event
        //i am changig the state, so that searchfield gets updated
        //onSearchChange changes the state in the constructor

    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            //------- we declare that filtered robots is a new array of the state after the event and pass it down to <cardlist/>
            //toLowerCase is used to make everything lowercase which is good to compare
            //if the name of the robots, in lowercase includes (which does the comparison), then only return the robot cards that are true to this
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
            <h1>Cool App Title xD</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots} />
            </div>
        );
    }
    
}

export default App;

//Everytime the event happens we call the SearchChange function, which is a prop 