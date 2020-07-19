import React from 'react';
import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <ul>
        <a className="navbar-brand brand" href="/">
          Google Books
        </a>
        <a className="navbar-brand search" href="/">
          Search
        </a>
        <a className="navbar-brand saved" href="/saved">
          Saved
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
