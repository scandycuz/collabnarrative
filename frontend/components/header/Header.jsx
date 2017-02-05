import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
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

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {

    return(
      <div className="header-container container">
        <h1>Collabnarrative</h1>
        <ul className="header-menu">
          <li><a href="">Sign up</a></li>
          <li><a href="">Log In</a></li>
        </ul>
      </div>
    )
  }

}

export default withRouter(Header);
