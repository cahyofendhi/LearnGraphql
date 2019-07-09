import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";

import client from "./src/service/client";
import Main from "./src/module/Main";

import configureStore from "./src/store/configureStore";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ApolloProvider>
    );
  }
}
