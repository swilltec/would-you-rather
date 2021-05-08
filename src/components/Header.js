import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ page }) => {
  return (
    <header>
      <nav className="ui massive inverted menu">
        <div className="ui container">
          <div className="header item large">
            <i className="chess queen icon"></i>
          </div>

          <div className="left menu">
            <Link to="/" className={ page === 'home' ? 'active item' : 'item'}>Home</Link>
            <Link to="/new-question" className={ page === 'question' ? 'active item' : 'item'}>New Question</Link>
          </div>

          <div className="right menu">
            <Link to="/leader-board" className={ page === 'board' ? 'active item' : 'item'}>Leader Board</Link>
            <Link to="/login" className={ page === 'login' ? 'active item' : 'item'}>Login</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
