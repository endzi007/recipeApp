import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddEditForm from './addEditForm';

class AddEditRecipe extends Component {
    constructor(){
      super();
      this.state = {
        showModal: false
      }
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }
    componentWillReceiveProps(){
      this.open();
    }
    close(){
      this.setState({showModal: false});
    }
    open(){
      this.setState({showModal: true});
    }
    render(){
        return (
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header>Add new recipe</Modal.Header>
            <Modal.Body>
              <AddEditForm  titleProp="" recipeProp=""/>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="info">Add</Button>
              <Button bsStyle="danger" onClick={this.close}>Dissmiss</Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default AddEditRecipe;
