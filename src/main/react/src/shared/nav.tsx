import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  brand: string,
}

export class Navbar extends React.Component<NavbarProps> {
  constructor(props: NavbarProps) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand">{this.props.brand || "Jobs"}</a>
        <NavLink activeClassName="active" className="navbar-nav mr-aut" to="/">
          <span className="nav-link">Home</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="navbar-nav mr-aut"
          to="/repos"
        >
          <span className="nav-link">Repos</span>
        </NavLink>
      </nav>
    );
  }
}
