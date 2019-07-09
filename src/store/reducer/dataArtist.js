import { FETCH_ARTIST_BY_NAME } from "../actions/actionTypes";

const initialiaze = {
  artist: []
};

const reducer = (state = initialiaze, action) => {
  switch (action.type) {
    case FETCH_ARTIST_BY_NAME:
      return {
        ...state,
        artist: action.artist
      };
    default:
      return state;
  }
};

export default reducer;
