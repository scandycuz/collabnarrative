import { RECEIVE_STORIES } from '../actions/StoryActions';

import merge from 'lodash/merge';

const _nullStories = Object.freeze({
  stories: {}
});

const StoryReducer = (state = _nullStories, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_STORIES:
      const stories = action.stories;
      return merge({}, _nullStories, {stories});
    default:
      return state;
  }
}

export default StoryReducer;
