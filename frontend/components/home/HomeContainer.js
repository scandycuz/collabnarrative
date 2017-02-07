import { connect } from 'react-redux';

import Home from './Home';

import { requestFeaturedStories } from '../../actions/StoryActions';

const mapStateToProps = ({session, stories}) => ({
  stories: stories.stories,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestFeaturedStories: () => dispatch(requestFeaturedStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
