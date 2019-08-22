import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { news } from "../action/newsfeed.action";
import NewsFeed from "../component/NewsFeed";

const DispatchToProps = dispatch => {
  return {
    NewsData: () => {
      dispatch(news());
    }
  };
};

const StateToProps = state => {
  return {
    newsfeed: state
  };
};

const NewsFeedContainer = withRouter(
  connect(
    StateToProps,
    DispatchToProps
  )(NewsFeed)
);
export default NewsFeedContainer;
