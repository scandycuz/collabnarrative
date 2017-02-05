import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

import Header from './header/Header';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const children = this.props.children;

    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="content">
          {children}
        </div>
        <footer>
        </footer>
      </div>
    );
  }

}

export default withRouter(App);
