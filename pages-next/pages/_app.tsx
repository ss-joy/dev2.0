import { NavigationMenuDemo } from "@/components/Navigation";
// import { store } from "@/redux/store";
import { rtkStore } from "@/rtk/store";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <NavigationMenuDemo />
        <Component {...pageProps} />
      </ApolloProvider>
      {/* <Provider store={rtkStore}>
      </Provider> */}
    </>
  );
}
