import { RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  LOGOUT } from '../actions/SessionActions';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: [],
  fragments: {}
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case LOGOUT:
      return merge({}, _nullUser);
    default:
      return state;
  }
}

export default SessionReducer;
