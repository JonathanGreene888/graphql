import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import bodyParser from 'body-parser';
// The GraphQL schema in string form
import typeDefs from './types';
// The GraphQL resolvers
import resolvers from './resolvers';

const cors = require(`cors`);

// Put together a schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

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
        mutation updateWeeksOfDemandRule($input: WeeksOfDemandInput) {
          updateWeeksOfDemandRule(input: $input) {
          }
        }`,
    })
);

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`Go to ${process.env.PORT || 3000} to run queries!`);
});
