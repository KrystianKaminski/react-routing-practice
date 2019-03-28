import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/courses" exact component={Courses} />
        <Route path="/users" exact component={Users} />
      </BrowserRouter>
    );
  }
}

export default App;
