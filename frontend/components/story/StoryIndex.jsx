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
      let fragments = Object.keys(story.fragments).map ( (key) => {
        return story.fragments[key].body
      });
      return fragments;
    });

    if (stories) {
      return (
        <div className="story-container container group">
          {stories.map( (story, idx) => (
            <StoryIndexItem key={idx}
                            story={story}/>
          ))}
        </div>
      );
    }
  }

}

export default withRouter(StoryIndex);
