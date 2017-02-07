import { applyMiddleware } from 'redux';

import SessionMiddleware from './SessionMiddleware';
import StoryMiddleware from './StoryMiddleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  StoryMiddleware
);

export default RootMiddleware;
