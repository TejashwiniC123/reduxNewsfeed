import * as newsAction from "../action/newsfeed.action";
const newsdetails = (
  state = {
    loading: false,
    newsData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.status) {
    case newsAction.REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case newsAction.SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        newsFeedData: action.newsData
      });

    case newsAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.userError
      });
    default:
      return state;
  }
};
export default newsdetails;
