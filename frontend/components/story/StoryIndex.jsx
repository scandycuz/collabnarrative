import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

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
    if (Object.keys(this.state.stories).length !== Object.keys(nextProps.stories).length) {
      let stories = nextProps.stories;
      this.setState({stories});
    }
  }

  render() {

    const stories = Object.keys(this.state.stories).map( (key) => {
      let story = this.state.stories[key];
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

    if (stories) {
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

}

export default withRouter(StoryIndex);
