import { combineReducers } from 'redux';

import SessionReducer from './SessionReducer';
import StoryReducer from './StoryReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  stories: StoryReducer
});

export default RootReducer;
