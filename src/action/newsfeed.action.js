export const REQUESTING = "REQUESTING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const NEWS_REQUEST = "NEWS_REQUEST";
export const NEWS_SUCCESS = "NEWS_SUCCESS";
export const NEWS_FAILURE = "NEWS_FAILURE";
export function newsRequesting() {
  return {
    type: NEWS_REQUEST,
    status: REQUESTING
  };
}

export function newsSuccess(data) {
  return {
    type: NEWS_SUCCESS,
    status: SUCCESS,
    newsData: data
  };
}

export function newsFailure(error) {
  return {
    type: NEWS_FAILURE,
    status: FAILURE,
    userError: error
  };
}

export function news() {
  return async dispatch => {
    try {
      dispatch(newsRequesting());

      const query = "bitcoin";
      const fromDate = "2019-07-22";
      const sortBy = "publishedAt";
      const apiKey = "2bc27b730da541a3ae72aafa21b3f1fe";
      const result = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&sortBy=${sortBy}&apiKey=${apiKey}`
      );

      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(newsSuccess(resultJson));
    } catch (e) {
      dispatch(newsFailure(e.message));
    }
  };
}
