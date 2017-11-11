import React, { Component } from 'react';
import './App.css';
import AddEditRecipe from './components/addEditRecipe';
import RecipeList from './components/recipeList.js';
import EditRecipe from './components/editRecipe';
import Header from './components/header';
import Footer from './components/footer';
import { Navbar } from 'react-bootstrap';
import _ from 'lodash';
class App extends Component {
  constructor(){
    super();
    this.state = {
      showAddModal: false,
      showEditModal: false,
      recipes: "",
      editObj:{
        id: "",
        title: "",
        recipe: ""
      },
      display: "",
      switchView: "",
      searchString: ""
    }
  }
  componentWillMount(){

    let temp = [
      {title: "Shoyu Chicken", recipe:"1 cup soy sauce, 1 cup brown sugar, 1 cup water, 4 gloves garlic, minced"},
      {title: "Soba noodle salad", recipe:"2 tablespoons rice vinegar, 1 tablespoon vegetable oil, 1 tablespoon sesame oil, 1 tablespoon brown sugar"},
      {title: "Italian Chicken Marinade", recipe:"1 (16 ounce) bottle Italian-style salad dressing, 1 teaspoon garlic powder, 1 teaspoon salt, 4 skinless boneless chicken breast halves"},
      {title: "Shoyu Chicken New Recipe", recipe:"3 cup soy sauce, 7 cup brown sugar, 1 cup water, 4 gloves garlic, minced"},
      {title: "Soba noodle salad", recipe:"1 cup soy sauce, 1 cup brown sugar, 1 cup water, 4 gloves garlic, minced"},
    ];
    var recipes = JSON.parse(localStorage.getItem("recipes")) || temp;
    localStorage.setItem("recipes", JSON.stringify(recipes));
      this.setState({
        recipes: recipes,
        switchView: recipes
      });
  }
  showModalComponent(prop){
    this.setState({
      showAddModal: prop,
      showEditModal: prop
    });
  }
  handleClick(){
    this.setState({showAddModal: true});
  }
  removeItem(id){
    let temp = this.state.recipes;
    temp.splice(id, 1);
    localStorage.setItem("recipes", JSON.stringify(temp));
    this.setState({
      showAddModal: false,
      recipes: temp
    }, () => {
      this.filter(this.state.searchString)
    });
  }
  setView(prop){
    this.setState({
      switchView: prop
    });
  }
  setEditElement(id){
    let title1 = this.state.recipes[id].title;
    let recipe1 = this.state.recipes[id].recipe;
    this.setState({
      editObj:{
        id: id,
        title: title1,
        recipe: recipe1
      }
    }, () => {
      this.setState({
        showEditModal: true
      });
    });
  }
  updateItem(prop){
    this.setState({
      "recipes": prop
    }, ()=>{
      this.filter(this.state.searchString);
    });
  }
  addItem(prop){
    this.setState({
      "recipes": prop
    }, () => {
      this.filter(this.state.searchString)
    });
  }
  filter(str){
    let temp = this.state.recipes;
    if(str.length === 0){
      this.setState({
        switchView: this.state.recipes,
        searchString: ""
      })
    } else {
      var a = _.filter(temp, function(obj){
        return obj.title.indexOf(str) !== -1;
      });
      this.setState({
        display: a,
      }, () => {
        this.setState({
          switchView: this.state.display,
          searchString: str
        })
      });
    }
    
  }
  render() {
    return (
      <div className="container">
        <Header filter={this.filter.bind(this)} addRecipe = {this.handleClick.bind(this)}/>
        <EditRecipe 
          showComponent={this.showModalComponent.bind(this)} 
          showHide={this.state.showEditModal}
          title={this.state.editObj.title} 
          recipe={this.state.editObj.recipe} 
          nodeId ={this.state.editObj.id}
          updateItem = {this.updateItem.bind(this)}
        />
        <AddEditRecipe showComponent={this.showModalComponent.bind(this)} addItem={this.addItem.bind(this)} showHide={this.state.showAddModal}/>
        <RecipeList 
          setEditElement = {this.setEditElement.bind(this)}
          recipes={this.state.switchView}
          recipeList = {this.state.recipes}
          removeItem={this.removeItem.bind(this)}  
          updateItem = {this.updateItem.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}

export default App;