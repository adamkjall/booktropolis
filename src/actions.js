import {
  CHANGE_SEARCH_FIELD,
  CHANGE_DATE,
  REQUEST_BOOKS_PENDING,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILED
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

export const setDate = date => ({
  type: CHANGE_DATE,
  payload: date
})

export const requestCurrentBestSellers = () => dispatch => {
  dispatch({ type: REQUEST_BOOKS_PENDING });
  fetchCurrentBestSellers()
    .then(data =>
      dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: REQUEST_BOOKS_FAILED, payload: error })
    );
};

export const requestBestSellersByDate = (date) => dispatch => {
  dispatch({ type: REQUEST_BOOKS_PENDING });
  fetchBestSellersByDate(date)
    .then(data =>
      dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: data })
    )
    .catch(error =>
      dispatch({ type: REQUEST_BOOKS_FAILED, payload: error })
    );
};
