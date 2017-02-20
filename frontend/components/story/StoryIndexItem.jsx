import React from 'react';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

class StoryIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.truncateText = this.truncateText.bind(this);
  }

  componentDidMount() {
    this.truncateText();
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  truncateText() {
    let containers = document.getElementsByClassName('story-item');

    for (let i = 0; i < containers.length; i ++) {
      let $container = $(containers[i]).find(".story");
      let height = $container.height();
      let $p = $container.find('p');

      while ($p.outerHeight() > height) {
        let $body = $p.find(".story-body-container .story-body");
        if(!$body.text().match(/\W*\s(\S)*$/)) { break; }

        $body.text( (index, text) => {
          return text.replace(/\W*\s(\S)*$/, '...');
        });
      }
    }
  }

  render() {
    const story = this.props.story;
    const fragments = this.props.fragments;
    const users = this.props.users;

    const firstSentence = fragments[0].slice(1);
    const firstLetter = fragments[0][0];
    const storyBody = fragments.slice(1, 12).join(" ");

    const numContributions = fragments.length;
    const numCollaborators = users.length;
    const numActiveUsers = 0; // temp variable

    return (
      <a className="story-item item span-4 group">
        <div className="story box-padding light-border med-radius quick-transition group">
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
        <div className="story-info box-padding light-border med-radius quick-transition parent">
          <div className="subtitle"><span className="large-num">{numContributions}</span></div>
          <div className="subtitle"><span className="large-num">{numCollaborators}</span></div>
          <div className="subtitle"><span className="large-num">{numActiveUsers}</span></div>
        </div>
      </a>
    );

  }

}

export default withRouter(StoryIndexItem);
