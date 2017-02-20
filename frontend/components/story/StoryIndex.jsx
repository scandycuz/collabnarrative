import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
import merge from 'lodash/merge';

import StoryIndexItem from './StoryIndexItem';

class StoryIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: {}
    }
  }

  componentDidMount() {
    this.props.requestFeaturedStories();
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
    let stories = nextProps.stories;
    if (Object.keys(this.state.stories).length !== Object.keys(stories).length) {
      this.setState({stories});
    }
  }

  render() {
    let tempState = merge({}, this.state);
    const stories = Object.keys(tempState.stories).map( (key) => {
      let story = tempState.stories[key];
      let fragments = Object.keys(story.fragments).map( (key) => {
        return story.fragments[key].body
      });
      let users = Object.keys(story.users).map( (key) => {
        return story.users[key];
      });

      story.fragments = fragments;
      story.users = users;
      return story;
    });

    return (
      <div className="story-container container group">
        {stories.map( (story, idx) => (
          <StoryIndexItem key={idx}
            story={story}
            users={story.users}
            fragments={story.fragments}/>
        ))}
      </div>
    );
  }

}

export default withRouter(StoryIndex);
