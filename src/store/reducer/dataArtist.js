import { FETCH_ARTIST_BY_NAME, START_LOADING, STOP_LOADING } from "../actions/actionTypes";

const initialiaze = {
  artist: [],
  isLoading: false
};

const reducer = (state = initialiaze, action) => {
  switch (action.type) {
    case FETCH_ARTIST_BY_NAME:
      return {
        ...state,
        artist: action.artist
      };
    case START_LOADING: 
      return {
        ...state,
        isLoading: true
      }
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
};

export default reducer;
