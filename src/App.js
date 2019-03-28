import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Link></Link>
        </nav>
        <Route path="/courses" exact component={Courses} />
        <Route path="/users" exact component={Users} />
      </BrowserRouter>
    );
  }
}

export default App;
