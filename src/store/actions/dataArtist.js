import { FETCH_ARTIST_BY_NAME, START_LOADING, STOP_LOADING  } from "./actionTypes";

import client from "../../client";
import { artistQuery } from "../../actions/graphql/queries";

export const getArtist = name => dispatch => {
  if (name.length > 0) {
    dispatch(startGetData())
    client
      .query({
        query: artistQuery,
        variables: { name: name },
      })
      .then(resp => {
        dispatch(stopGetData())
        if (resp.data) {
          dispatch(setDataArtist(resp.data.queryArtists));
        }
      })
      .catch(error => {
        dispatch(stopGetData())
        const message = JSON.stringify(error);
        console.log(`Error ${message}`);
        alert(`${message}`)
      });
  } else {
    alert(`Input not be empty`)
  }
};

export const setDataArtist = artist => ({
  type: FETCH_ARTIST_BY_NAME,
  artist: artist
});

export const startGetData = () => {
  return {
    type: START_LOADING,
  }
}

export const stopGetData = () => {
  return {
    type: STOP_LOADING,
  }
}
