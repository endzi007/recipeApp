import React, { Component } from 'react';
import './App.css';
import AddEditRecipe from './components/addEditRecipe';
import RecipeList from './components/recipeList.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showComponent: false,
      recipes: ""
    }
  }
  componentWillMount(){
    var recipes = JSON.parse(localStorage.getItem("recipes"));
    this.setState({
      recipes: recipes
    });
  }
  showModalComponent(prop){
    this.setState({
      showComponent: prop
    });
  }
  handleClick(){
    this.setState({showComponent: true});
  }
  removeItem(id){
    let temp = this.state.recipes;
    temp.splice(id, 1);
    localStorage.setItem("recipes", JSON.stringify(temp));
    this.setState({
      showComponent: false,
      recipes: temp
    });
  }
  updateItem(id){
    console.log("update called");
    let temp = this.state.recipes;

  }
  addItem(prop){
    this.setState({
      "recipes": prop
    });
  }
  render() {
    return (
      <div className="container">
        <h2>Recipe App - FCC</h2>
        <AddEditRecipe showComponent={this.showModalComponent.bind(this)} addItem={this.addItem.bind(this)} showHide={this.state.showComponent}/>
        <RecipeList recipes={this.state.recipes} removeItem={this.removeItem.bind(this)}  updateItem = {this.updateItem.bind(this)}/>
        <button type="button" className="btn btn-info btn-lg" onClick={this.handleClick.bind(this)}>Add Recipe</button>
      </div>
    );
  }
}

export default App;