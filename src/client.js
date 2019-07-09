import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

const NETWORK_INTERFACE_URL =
  "https://spotify-graphql-server.herokuapp.com/graphql";

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`test`)
        );
      }
      if (networkError) {
        console.log(`[Network Error] : ${networkError}`);
      }
    }),
    new HttpLink({
      uri: NETWORK_INTERFACE_URL,
      credentials: "same-origin"
    })
  ]),
  cache: new InMemoryCache()
});

export default client;
