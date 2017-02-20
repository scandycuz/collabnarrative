import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Footer extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    const goToTop = (e) => {
      e.preventDefault();
      this.props.router.push('/');
      window.scrollTo(0, 0);
    }

    return(
      <div className="footer-container container">
        <div className="span-9">
          <div className="span-3">
            <h4 className="logo logo-small">
              <a href="#" onClick={goToTop}>Collabnarrative</a>
            </h4>
          </div>
          <div className="span-3">
            <h4 className="nav-title">Company</h4>
            <ul className="footer-list">
              <li><a href="https://www.linkedin.com/in/trevorscandalios/" target="_blank">About</a></li>
              <li><a href="https://www.linkedin.com/in/trevorscandalios/" target="_blank">Careers</a></li>
              <li><a href="https://angel.co/trevor-scandalios" target="_blank">Press</a></li>
            </ul>
          </div>
          <div className="span-3">
            <h4 className="nav-title">Community</h4>
            <ul className="footer-list">
              <li><a href="https://www.linkedin.com/in/trevorscandalios/" target="_blank">Recruiters</a></li>
              <li><a href="https://github.com/scandycuz" target="_blank">Developers</a></li>
              <li><a href="https://angel.co/trevor-scandalios" target="_blank">Companies</a></li>
            </ul>
          </div>
          <div className="span-3">
            <h4 className="nav-title">Useful Links</h4>
            <ul className="footer-list">
              <li><a href="http://www.startupgogo.xyz/" target="_blank">StartupGoGo</a></li>
              <li><a href="https://chrome.google.com/webstore/detail/focusly/jlihnplddpebplnfafhdanaiapbeikbk?hl=en-GB"
                 target="_blank">Focusly</a></li>
              <li><a href="https://github.com/scandycuz/reaction" target="_blank">Reaction</a></li>
            </ul>
          </div>
        </div>
        <div className="span-3">
          <div className="footer-links">
            <a className="footer-link circle-link" href="https://github.com/scandycuz" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a className="footer-link circle-link" href="https://www.linkedin.com/in/trevorscandalios/" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a className="footer-link circle-link" href="mailto:trevorscandalios@gmail.com" target="_top">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(Footer);
