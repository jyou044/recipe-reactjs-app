import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateRecipe from './components/CreateRecipe';
import ListRecipes from './components/ListRecipes';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Create Recipe</Link>
            </li>
            <li className="navbar-item">
              <Link to="/list" className="navbar-link">List of Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" exact element={<CreateRecipe />} />
        <Route path="/list" element={<ListRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
