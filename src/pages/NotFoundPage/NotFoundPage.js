import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { generatePath } from 'helpers/route';

import './NotFoundPage.css';

class NotFoundPage extends Component {

  render() {
    return <div className="NotFoundPage">
      <h1>404</h1>
      <p>Not Found :(</p>
      <Link to={generatePath('homePage')}>Ana Sayfa</Link>
    </div>
  }
}

export default NotFoundPage;