const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const restApi = require('./routes');

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

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();

// Adding routes to express app
app.use('/', restApi);

// Adding the REST endpoints as middleware to the GraphQL endpoints
apollo.applyMiddleware({ app });

module.exports = app;
