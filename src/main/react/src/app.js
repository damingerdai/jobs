import React from 'react';
import ReactDOM from 'react-dom';

import 'core-js';

import { Content, Navbar } from './shared';

import './styles.scss';

function App() {
    return (
      <div>
        <Navbar brand={'Jobs系统'}/>
        <Content></Content>
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'));