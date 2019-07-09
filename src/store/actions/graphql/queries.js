import gql from 'graphql-tag';


const artistQuery = gql`
  query getByArtist($name: String!) {
    queryArtists(byName: $name) {
      name
      image
      albums {
        name
      }
    }
  }
`;

export { artistQuery };
