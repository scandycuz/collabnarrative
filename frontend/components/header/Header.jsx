import React from 'react';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      formType: "log in",
      user: {
        username: "",
        password: ""
      },
      errors: [],
      dropdownActive: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.processForm = this.processForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.pageClick = this.pageClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.pageClick, false);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length > 0) {
      let errors = nextProps.errors;
      this.setState({errors});
    } else {
      this.closeModal();
    }
  }

  componentDidUpdate() {

  }

  // Close dropdown if clicked outside
  pageClick(e) {
    if (this.state.dropdownActive) {
      let dropdown = document.getElementById("user-menu");
      let target = e.target;
      let dropdownClicked = $.contains(dropdown, target);

      if (!dropdownClicked) {
        this.setState({dropdownActive: false});
      }
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderErrors () {
    if (this.state.errors.length > 0) {
      return(
        <ul className="errors-list">
          {this.state.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )
    }
  }

  update(property) {
    return e => {
      let newForm = this.state.user;
      newForm[property] = e.target.value;
      this.setState({user: newForm});
    };
  }

  processForm(e) {
    e.preventDefault();
    let user = this.state.user;
    let formType = this.state.formType;
    this.props.processForm(formType)({user});
  }

  // Handle click for header auth links
  handleClick(e) {
    e.preventDefault();
    let target = e.target.innerText.toLowerCase();

    switch (target) {
      case "sign up":
      case "log in":
        this.setState({formType: target, errors: []});
        this.openModal();
        break;
      case "logout":
        this.setState({dropdownActive: false});
        this.props.logout();
        break;
    }
  }

  toggleMenu(e) {
    e.preventDefault();
    let dropdownActive = !this.state.dropdownActive;
    this.setState({dropdownActive});
  }

  renderModal() {
    const customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(255, 255, 255, 0.75)',
        zIndex            : 1000
      },
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        paddingTop            : '2rem',
        paddingBottom         : '1.5rem',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#f8f8f8',
        width                 : '270px'
      }
    };

    // Login or signup form
    const formType = this.state.formType;
    let authType;
    let authMessage;
    if (formType === "log in") {
      authType = "Log in"
      authMessage = <div className="auth-switch centered message">
          Don't have an account? <a onClick={this.handleClick} href="#">Sign up</a>
      </div>;
    } else {
      authType = "Sign Up";
      authMessage = <div className="auth-switch centered message">
          Have an account? <a onClick={this.handleClick} href="#">Log in</a>
      </div>;
    }

    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="User Auth" >

        <a className="auth-close close">
          <i className="fa fa-times" aria-hidden="true" onClick={this.closeModal}></i>
        </a>
        <h4 className="modal-title"><span>{authType}</span></h4>
        {this.renderErrors()}
        <form className="auth-form">
          <label>
            <input type="text"
                   className="login-input"
                   value={this.state.user.username}
                   placeholder="Username"
                   onChange={this.update("username")}/>
          </label>
          <label>
            <input type="password"
                   className="login-input"
                   value={this.state.user.password}
                   placeholder="Password"
                   onChange={this.update("password")}/>
          </label>
          <button className="white" onClick={this.processForm}>{authType}</button>
          {authMessage}
        </form>
      </Modal>
    );
  }

  render() {
    const capitalizeFirstLetters = (string) => {
      let words = string.split(" ");
      words = words.map( (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      return words.join(" ");
    }

    let currentUser = (this.props.currentUser) ? this.props.currentUser : {};
    let isRotated = (this.state.dropdownActive) ? "rotated" : "";
    let color = (this.state.dropdownActive) ? "blue" : "white";
    let dropdownMenu = null;
    if (this.state.dropdownActive) {
      dropdownMenu = <ul className={`user-dropdown dropdown`}>
        <li><a onClick={this.handleClick} href="#" className="semi-bold">Logout</a></li>
      </ul>;
    }
    let userMenu;
    if (this.props.loggedIn) {
      let userName = capitalizeFirstLetters(currentUser.username);
      userMenu = <ul className="header-menu menu">
        <li id="user-menu" className="user-menu parent white">
          <a href="#" className={`dropdown-toggle ${color}`} onClick={this.toggleMenu}>
            {userName}&nbsp;
            <i className={`fa fa-angle-down ${isRotated}`} aria-hidden="true"></i>
          </a>
          <ReactCSSTransitionGroup
            transitionName="toggle"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}>
            {dropdownMenu}
          </ReactCSSTransitionGroup>
        </li>
      </ul>;
    } else {
      userMenu = <ul className="header-menu menu">
        <li><a onClick={this.handleClick} href="#" className="semi-bold">Sign up</a></li>
        <li><a onClick={this.handleClick} href="#" className="semi-bold">Log In</a></li>
      </ul>;
    }

    const goHome = (e) => {
      e.preventDefault();
      this.props.router.push("/");
    }
    return(
      <div className="header-container container">
        <h1 id="logo" className="logo white"><a href="#" onClick={goHome}>Collabnarrative</a></h1>
        {userMenu}
        {this.renderModal()}
      </div>
    )
  }

}

export default withRouter(Header);
