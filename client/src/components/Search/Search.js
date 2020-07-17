import React from 'react';
import './Search.css';

export default function Search(props) {
  return (
    <div className="search-div">
      <h3>Book Search</h3>
      <form>
        <div className="form-group">
          <input
            className="form-control"
            name="title"
            placeholder="Enter title here"
            value=""
            {...props}></input>
        </div>
        <button disabled="" className="btn btn-success" {...props}>
          Search Book
        </button>
      </form>
    </div>
  );
}
