import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const GET_GREETING = gql`
  query {
    hello {
      world
    }
  }
`;

const Greeting = () => {
  return (
    <Query query={GET_GREETING}>
      {({ loading, data }) =>
        !loading && (
          <h1>{data}</h1>
        )
      }
    </Query>
  );
};

export default Greeting;
