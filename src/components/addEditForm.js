import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class AddEditForm extends Component {
    constructor () {
        super();
        this.state = {
            title: "",
            recipe: ""
        }
        this.getValidationState = this.getValidationState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
      this.setState({
        title: this.props.titleProp,
        recipe: this.props.recipeProp
      });
    }
    getValidationState() {
      const length = this.state.title.length;
      console.log();
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  
    handleChange(e) {
      let inputId = e.target.id;
      if(inputId = "formTitle"){
        this.setState({ title: e.target.value });
      } else{
        this.setState({ recipe: e.target.value });
      }
      
    }
  
    render() {
      return (
        <form>
          <FormGroup
            controlId="formTitle"
            //validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="Enter title"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup
            controlId="formRecipe"
            //validationState={this.getValidationState()}
          >
            <FormControl
              type="text"
              value={this.state.recipe}
              placeholder="Enter title"
              onChange={this.handleChange}
            />
          </FormGroup>
        </form>
      );
    }
  }
  
export default AddEditForm;