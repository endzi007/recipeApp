import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddEditForm from './addEditForm';

class EditRecipe extends Component {
    constructor(){
      super();
      this.state = {
        recipes: [],
        title: "",
        recipe: ""
      }
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
      this.changeStateFromInput = this.changeStateFromInput.bind(this);
      this.editRecipe = this.editRecipe.bind(this);
    }
    componentWillReceiveProps(nextProps){
      if(this.props !== nextProps){
        this.setState({
          title: nextProps.title,
          recipe: nextProps.recipe
        });
      }
    }

    close(){
      this.props.showComponent(false);
    }
    open(){
      this.props.showComponent(false);
    }
    changeStateFromInput(title, recipe){
      this.setState({
        title: title,
        recipe: recipe
      });
    }
    editRecipe(){
      let id = this.props.nodeId;
      let temp = JSON.parse(localStorage.getItem("recipes"));
      let newTitle = this.state.title;
      let newRecipe = this.state.recipe;
      temp.splice(id, 1, {title: newTitle, recipe: newRecipe});
      this.props.updateItem(temp);
      localStorage.setItem("recipes", JSON.stringify(temp));
    }

    render(){
        return (
          <Modal show={this.props.showHide} onHide={this.close}>
            <Modal.Header>Add new recipe</Modal.Header>
            <Modal.Body>
              <AddEditForm  titleProp={this.state.title} recipeProp= {this.state.recipe} changeStateFromInput={this.changeStateFromInput.bind(this)}/>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="success" onClick={this.editRecipe}>Update</Button>
              <Button bsStyle="warning" onClick={this.close}>Cancel</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default EditRecipe;
