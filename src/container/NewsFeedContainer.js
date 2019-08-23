import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNewsData } from "../action/newsfeed.action";
import NewsFeed from "../component/NewsFeed";

const dispatchToProps = dispatch => {
  return {
    getNewsData: () => {
      dispatch(getNewsData());
    }
  };
};

const stateToProps = state => {
  return {
    newsFeed: state
  };
};

const NewsFeedContainer = withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(NewsFeed)
);
export default NewsFeedContainer;
