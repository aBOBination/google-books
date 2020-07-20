import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { RecipeList, RecipeListItem } from '../components/RecipeList';
import { Container, Row, Col } from '../components/Grid';
import Search from '../components/Search/Search';

class Books extends Component {
  state = {
    recipes: [],
    recipeSearch: ''
  };

  componentDidMount() {
    API.getSaved()
      .then((res) => {
        console.log(res.data);
        this.setState({ recipes: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map((recipe) => {
                    return (
                      <RecipeListItem
                        key={recipe.id}
                        title={recipe.volumeInfo.title}
                        href={recipe.volumeInfo.infoLink}
                        ingredients={recipe.volumeInfo.description}
                        thumbnail={recipe.volumeInfo.imageLinks.smallThumbnail}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Books;
