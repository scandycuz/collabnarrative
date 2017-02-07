import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class StoryIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const story = this.props.story;

    const firstSentence = story[0].slice(1);
    const firstLetter = story[0][0];
    const storyBody = story.slice(1).join(" ");

    return (
      <div className="story-item item span-4 group">
        <p className="story-text">
          <span className="first-letter-container">
            <span className="first-letter">{firstLetter}</span>
          </span>
          <span className="story-body-container">
            <span className="first-sentence">{firstSentence} </span>
            <span className="story-body">{storyBody}</span>
          </span>
        </p>
      </div>
    );

  }

}

export default withRouter(StoryIndexItem);
