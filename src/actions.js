import {
  CHANGE_SEARCH_FIELD,
  REQUEST_BEST_SELLERS_PENDING,
  REQUEST_BEST_SELLERS_SUCCESS,
  REQUEST_BEST_SELLERS_FAILED
} from "./constants";

import {
  fetchCurrentBestSellers,
  fetchBestSellersByDate,
  searchForBook
} from "./common/services";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestCurrentBestSellers = dispatch => {
  dispatch({ type: REQUEST_BEST_SELLERS_PENDING });
  fetchCurrentBestSellers()
    .then(data =>
      dispatch({ type: REQUEST_BEST_SELLERS_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: REQUEST_BEST_SELLERS_FAILED, payload: error })
    );
};
