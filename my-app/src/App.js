import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import {robots} from './robots.js';


const App = () => {
    return (
        <div>
        <h1>Cool App Title xD</h1>
        <SearchBox />
        <CardList robots={robots} />
        </div>
    );
}

export default App;