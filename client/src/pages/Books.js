import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { RecipeList, RecipeListItem } from '../components/RecipeList';
import { Container, Row, Col } from '../components/Grid';
import Search from '../components/Search/Search';

class Books extends Component {
  state = {
    books: [],
    bookSearch: ''
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getRecipes(this.state.bookSearch)
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
    console.log(this.state.books);
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <Search
                bookSearch={this.state.bookSearch}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.books.map((recipe) => {
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
