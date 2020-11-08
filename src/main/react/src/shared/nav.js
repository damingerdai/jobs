import React from 'react';
import ReactDOM from 'react-dom';

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand">{this.props.brand || 'Jobs'}</a>
      </nav>
    );
  }
}
