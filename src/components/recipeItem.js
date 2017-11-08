import React, { Component } from 'react';
import { Panel, Button, ButtonToolbar, ListGroupItem, ListGroup } from 'react-bootstrap';

class RecipeItem extends Component {
    render(){
        return (
        <Panel collapsible header="Panel heading" bsStyle="info">
            <ListGroup>
                <h3>Ingredients</h3>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ButtonToolbar>         
                <Button bsStyle="danger">Delete</Button>
                <Button bsStyle="info">Edit</Button>
                </ButtonToolbar>
            </ListGroup>
        </Panel>
        )
    }
}

export default RecipeItem;