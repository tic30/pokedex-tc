import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://q-exercise-api.o64ixruq9hj.us-south.codeengine.appdomain.cloud/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      PokemonConnection: {
        fields: {
          edges: {
            keyArgs: ["id"],
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
    },
  }),
});

export default client;
