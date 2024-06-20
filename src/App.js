import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import RecipesList from "./RecipesList";


function App() {
    const [recipes, setRecipes] = useState([]);

    return (
        <div className="App">
            <Header setRecipes={setRecipes} />
            <div className="content">
                <RecipesList recipes={recipes} /> {}
            </div>
        </div>
    );
}

export default App;
