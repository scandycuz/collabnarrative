import { receiveCurrentUser,
         receiveSessionErrors,
         LOGIN,
         LOGOUT,
         SIGNUP
       } from '../actions/SessionActions';

import { signup, login, logout } from '../util/SessionApiUtils';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => dispatch(receiveSessionErrors(xhr.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
