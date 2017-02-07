import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

import Hero from './Hero';
import StoryIndex from '../story/StoryIndex';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true,
      formType: "login"
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    return(
      <div className="home-content">
        <Hero />
        <StoryIndex {...this.props}/>
      </div>
    )
  }

}

export default withRouter(Home);
