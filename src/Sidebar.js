import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
      </div>
    );
  }
}

export default Sidebar;
