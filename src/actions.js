import {
  CHANGE_SEARCH_FIELD,
  CHANGE_DATE,
  REQUEST_BOOKS_PENDING,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILED,
  FLIP_CARD
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

export const updateDate = date => ({
  type: CHANGE_DATE,
  payload: date
});

export const requestCurrentBestSellers = () => dispatch => {
  dispatch({ type: REQUEST_BOOKS_PENDING });
  fetchCurrentBestSellers()
    .then(data => dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_BOOKS_FAILED, payload: error }));
};

export const requestBestSellersByDate = date => dispatch => {
  dispatch({ type: REQUEST_BOOKS_PENDING });
  fetchBestSellersByDate(date)
    .then(data => dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_BOOKS_FAILED, payload: error }));
};

export const requestBooksBySearch = search => dispatch => {
  dispatch({ type: REQUEST_BOOKS_PENDING });
  searchForBook(search)
    .then(data => dispatch({ type: REQUEST_BOOKS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_BOOKS_FAILED, payload: error }));
};

export const flipCard = id => ({
  type: FLIP_CARD,
  payload: id
});
