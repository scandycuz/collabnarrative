import React from 'react';

import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const children = this.props.children;

    return (
      <div>
        <header>
        </header>
        <div className="content">
          React is online!
          {children}
        </div>
        <footer>
        </footer>
      </div>
    );
  }

}

export default withRouter(App);
