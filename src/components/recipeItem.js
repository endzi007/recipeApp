import React, { Component } from 'react';
import { Panel, Button, ButtonToolbar, ListGroupItem, ListGroup } from 'react-bootstrap';

class RecipeItem extends Component {
    constructor(){
        super();
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }
   
    deleteItem(e){
        let idProp = this.props.id;
        let index = Number.parseInt(idProp.split("_").pop());
        this.props.removeItem(index);
    }
    updateItem(e){
        let idProp = this.props.id;
        let index = Number.parseInt(idProp.split("_").pop());
        this.props.updateItem(index);
    }
    splitRecipe(){
        var recipeString = this.props.recipe;
        var temp = recipeString.split(",");
        return temp;
    }
    render(){
        var listItems = this.splitRecipe();
        var temp = []
        for(var i = 0; i<listItems.length; i++){
            temp.push(<ListGroupItem key={"ingr"+i}>{listItems[i]}</ListGroupItem>)
        }
        return (
        <Panel collapsible header={this.props.title} bsStyle="info" className="noPadding">
            <ListGroup>
                <h3 className="text-center">Ingredients</h3>
                <ListGroupItem>{temp}</ListGroupItem>
                <hr />
                <ButtonToolbar>         
                <Button bsStyle="danger" onClick={this.deleteItem}>Delete</Button>
                <Button bsStyle="info" onClick ={this.updateItem}>Edit</Button>
                </ButtonToolbar>
            </ListGroup>
        </Panel>
        )
    }
}

export default RecipeItem;