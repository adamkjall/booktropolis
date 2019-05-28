import {
  CHANGE_SEARCH_FIELD,
  CHANGE_DATE,
  REQUEST_BOOKS_PENDING,
  REQUEST_BOOKS_SUCCESS,
  REQUEST_BOOKS_FAILED,
  FLIP_CARD,
  RESET_FLIPPED_CARDS
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchBooks = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateDate = {
  date: new Date()
};

export const changeDate = (state = initialStateDate, action = {}) => {
  switch (action.type) {
    case CHANGE_DATE:
      return { ...state, date: action.payload };
    default:
      return state;
  }
};

const initialStateBooks = {
  isPending: false,
  books: [],
  error: ""
};

export const requestBooks = (state = initialStateBooks, action = {}) => {
  switch (action.type) {
    case REQUEST_BOOKS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_BOOKS_SUCCESS:
      return { ...state, isPending: false, books: action.payload };
    case REQUEST_BOOKS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};

const initialStateFlippedCards = {
  isFlipped: [],
  prevCardId: -1
};

export const updateFlippedCards = (
  state = initialStateFlippedCards,
  action = {}
) => {
  switch (action.type) {
    case FLIP_CARD:
      const cardId = action.payload;
      const newIsFlipped = state.isFlipped.slice();

      newIsFlipped[cardId] = !newIsFlipped[cardId];

      if (state.prevCardId !== -1 && cardId !== state.prevCardId) {
        newIsFlipped[state.prevCardId] = !newIsFlipped[cardId];
      }
      return { ...state, isFlipped: newIsFlipped, prevCardId: cardId };
    case RESET_FLIPPED_CARDS:
      return { ...state, isFlipped: [], prevCardId: -1}
    default:
      return state;
  }
};
