import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import { RecipesList } from './RecipesList'; // Upewnij się, że importujesz jako named import

function App() {
    const [recipes, setRecipes] = useState([]);

    return (
        <div className="App">
            <Header setRecipes={setRecipes} />
            <div className="content">
                <RecipesList recipes={recipes} /> {/* Użycie komponentu RecipesList */}
            </div>
        </div>
    );
}

export default App;
