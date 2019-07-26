import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema, MockList } from 'graphql-tools';
import bodyParser from 'body-parser';
// The GraphQL schema in string form
import typeDefs from './types';
// The customised mocks
import mocks from './mocks';

const cors = require(`cors`);

// Put together a schema
const schema = makeExecutableSchema({ typeDefs });

// This function call adds the mocks to your schema!
addMockFunctionsToSchema({ schema, mocks });

// Initialize the app
const app = express();

app.use(cors());
// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use(
    '/graphiql',
    graphiqlExpress({
        endpointURL: '/graphql',
        query: `# Welcome to GraphiQL
query author {
  author(id: 1) {
    name
    posts {
      title
      content
      views
    }
  }
}

query getWeeksOfDemandDefaultMasterRule($name: String!) {
  getWeeksOfDemand($name: String!) {
    name
    smooth
      WeeksOfDemandFactors {
        factor
        threshold
      }
    }
}

query posts {
  posts {
    title
    content
    views
    author {
      name
    }
  }
}`,
    })
);

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphql to run queries!');
});
