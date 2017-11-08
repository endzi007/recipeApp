import React, { Component } from 'react';
import { Panel, Button, ButtonToolbar, ListGroupItem, ListGroup } from 'react-bootstrap';

class RecipeItem extends Component {
    render(){
        return (
        <Panel collapsible header="Panel Heading" bsStyle="info" className="noPadding">
            <ListGroup>
                <h3 className="text-center">Ingredients</h3>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <hr />
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