import React from "react";
import "../Navbar/style.css";
import SearchName from "../SearchName/SearchName.js";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar bg">
          <button 
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon" />
          </button>
            <div className="collapse navbar-collapse row" id="navbarNav">
              <div className="search-area col-4">
                  <SearchName />
              </div>
            </div>
    </nav>
  );
}

export default Navbar;
