import { REQUEST_FEATURED_STORIES,
         requestFeaturedStories,
         receiveStories } from '../actions/StoryActions';

import { retrieveStories } from '../util/StoryApiUtils';

const StoryMiddleware = ({ getState, dispatch }) => next => action => {
  const successCallback = stories => dispatch(receiveStories(stories));
  const errorCallback = xhr => dispatch(receiveSessionErrors(xhr.responseJSON));

  switch (action.type) {
    case REQUEST_FEATURED_STORIES:
      retrieveStories(action.featured, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default StoryMiddleware;
