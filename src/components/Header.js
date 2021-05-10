import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ page }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <div className="logo">
            <i class="fas fa-question"></i>

            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={page === "home" ? "active nav-link" : "nav-link"}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/create-question"
                  className={
                    page === "question" ? "active nav-link" : "nav-link"
                  }
                  aria-current="page"
                >
                  New Question
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/leader-board"
                  className={page === "board" ? "active nav-link" : "nav-link"}
                >
                  Leader Board
                </Link>
              </li>
            </ul>
            <span >
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
