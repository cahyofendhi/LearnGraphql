import { FETCH_ARTIST_BY_NAME } from "./actionTypes";

import client from "../../client";
import { artistQuery } from "../../actions/graphql/queries";

export const getArtist = name => dispatch => {
  client
    .query({
      query: artistQuery,
      variables: { name: name },
    })
    .then(resp => {
      if (resp.data) {
        dispatch(setDataArtist(resp.data.queryArtists));
      }
    })
    .catch(error => {
      const message = JSON.stringify(error);
      console.log(`Error ${message}`);
      alert(`${message}`)
    });
};

export const setDataArtist = artist => ({
  type: FETCH_ARTIST_BY_NAME,
  artist: artist
});
