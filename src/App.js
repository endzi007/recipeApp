import React, { Component } from 'react';
import './App.css';
import AddRecipe from './components/addRecipeModal';

class App extends Component {
  render() {
    return (
      <div>
        <AddRecipe />
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
      </div>
    );
  }
}

export default App;