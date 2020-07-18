import React from 'react';

export default function Search(props) {
  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-xs-9 col-sm-10">
            <div className="input-group input-group-lg">
              <input
                className="form-control"
                type="text"
                name="recipeSearch"
                placeholder="Search For a Recipe"
                value={props.recipeSearch}
                onChange={props.handleInputChange}></input>
            </div>
          </div>
          <div className="col-xs-3 col-sm-2">
            <button
              className="btn btn-lg btn-success input-lg"
              onClick={props.handleFormSubmit}
              type="success">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
