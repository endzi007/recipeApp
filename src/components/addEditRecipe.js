import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddEditForm from './addEditForm';

class AddEditRecipe extends Component {
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
      this.addRecipe = this.addRecipe.bind(this);
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
    addRecipe(){
      var temp = JSON.parse(localStorage.getItem("recipes")) || [];
      temp.push({title: this.state.title, recipe: this.state.recipe});
      this.setState({
        recipes: temp
      }, () => {
        localStorage.setItem("recipes", JSON.stringify(temp));
        this.props.addItem(temp);
      });
    }

    render(){
        return (
          <Modal show={this.props.showHide} onHide={this.close}>
            <Modal.Header>Add new recipe</Modal.Header>
            <Modal.Body>
              <AddEditForm  titleProp="" recipeProp="" changeStateFromInput={this.changeStateFromInput.bind(this)}/>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="info" onClick={this.addRecipe}>Add</Button>
              <Button bsStyle="danger" onClick={this.close}>Dissmiss</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default AddEditRecipe;
