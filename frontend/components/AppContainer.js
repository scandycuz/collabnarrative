import { connect } from 'react-redux';

import App from './App';

import { signup,
         login,
         logout,
         receiveSessionErrors } from '../actions/SessionActions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
  processForm: (type) => {
    const formType = (type === "log in") ? login : signup;
    return (user) => {
      dispatch(formType(user))
    }
  },
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
