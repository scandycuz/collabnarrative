import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

import Header from './header/Header';
import Footer from './footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const children = this.props.children;

    return (
      <div>
        <header>
          <Header {...this.props}/>
        </header>
        <div className="content">
          {children}
        </div>
        <footer className="dark-black-background">
          <Footer />
        </footer>
      </div>
    );
  }

}

export default withRouter(App);
