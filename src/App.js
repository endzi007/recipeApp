import React, { Component } from 'react';
import './App.css';
import AddEditRecipe from './components/addEditRecipe';
import RecipeList from './components/recipeList.js';
class App extends Component {
  constructor(){
    super();
    this.state = {
      showComponent: false
    }
  }
  handleClick(){
    this.setState({showComponent: true});
    
  }
  render() {
    return (
      <div className="container">
        <h2>Recipe App - FCC</h2>
        <AddEditRecipe showComponent={this.state.showComponent}/>
        <RecipeList />
        <button type="button" className="btn btn-info btn-lg" onClick={this.handleClick.bind(this)}>Add Recipe</button>
      </div>
    );
  }
}

export default App;