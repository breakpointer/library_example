const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

// REST endpoints
app.get('/', (req, res) => res.send('Hello World!'));

// Adding the REST endpoints as middleware to the GraphQL endpoints
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
