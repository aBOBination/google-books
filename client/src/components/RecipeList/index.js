import React from 'react';
import Thumbnail from '../Thumbnail';
import { Container, Row, Col } from '../Grid';

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
  thumbnail = 'https://placehold.it/300x300',
  title,
  ingredients,
  href,
  handleSave
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3 className="title">{title}</h3>
            <p className="synopsys">Ingredients: {ingredients}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to recipe!
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={href}
              type="success"
              className="btn btn-info link">
              View Info
            </a>
            <a
              rel="noreferrer noopener"
              // target="_blank"
              href="#"
              // title={title}
              // synopys={ingredients}
              // link={href}
              type="button"
              onClick={handleSave}
              className="btn btn-info">
              Save
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
