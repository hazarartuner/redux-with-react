import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import { generatePath } from "helpers/route";

import routes from 'config/routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to={generatePath('homePage')}>The Market</Link>
        </header>

        <Switch>
          {Object.keys(routes).map(key =>
            <Route key={key} {...routes[key]} />
          )}
        </Switch>

        <footer>@2019</footer>
      </div>
    );
  }
}

export default App;
