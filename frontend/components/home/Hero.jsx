import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Hero extends React.Component {
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
      <div className="hero green-background">
        <div className="hero-container container">
          <h4 className="white text-shadow">Collaborate with others to create stories in real-time.</h4>
        </div>
      </div>
    )
  }

}

export default withRouter(Hero);
