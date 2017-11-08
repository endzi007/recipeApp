import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import RecipeItem from './recipeItem'
class RecipeList extends Component {
    render(){
        return (
            <Jumbotron>
                <RecipeItem />
                <RecipeItem />
                <RecipeItem />
          </Jumbotron>
        )
    }
}

export default RecipeList;
