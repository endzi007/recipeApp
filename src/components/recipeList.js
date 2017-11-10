import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import RecipeItem from './recipeItem'
class RecipeList extends Component {

    render(){
        var recipeList = [];
        var rec = this.props.recipeList;
        var counter = 0;
        for (var key in rec) {
            if (rec.hasOwnProperty(key)) {
                var element = rec[key];
                if(this.props.recipes.indexOf(element)!==-1){
                    recipeList.push(
                        <RecipeItem key={"recipeItem_"+key} 
                        id={"recipeItem_"+key} 
                        title={element.title} 
                        recipe={element.recipe} 
                        removeItem={this.props.removeItem} 
                        updateItem ={this.props.updateItem}
                        setEditElement={this.props.setEditElement}
                        />
                    )
                }
            }
        }
        return (
            <Jumbotron>
                {recipeList}
          </Jumbotron>
        )
    }
}

export default RecipeList;
