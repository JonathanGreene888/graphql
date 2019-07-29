import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import bodyParser from "body-parser";
// The GraphQL schema in string form
import typeDefs from "./types";
// The GraphQL resolvers
import resolvers from "./resolvers";

const cors = require(`cors`);

// Put together a schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize the app
const app = express();

app.use(cors());
// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    query: `# Welcome to GraphiQL
query author {
  author(id: 2) {
    firstName
    posts {
      title
      id
      votes
    }
  }
}

// query getWeeksOfDemandDefaultMasterRule($name: String!) {
//   getWeeksOfDemand($name: String!) {
//     name
//     smooth
//       WeeksOfDemandFactors {
//         factor
//         threshold
//       }
//     }
// }

<<<<<<< HEAD
// query GetCalculationRulesByMajorID({$majorID: Int!) {
//   getCalculationRulesByMajorID($majorID: Int!) {
//     ruleID
//     description
//     major {
//       name
//       id
//     }
//     minor {
//       majorID
//       minorID
//       name
//       description
//     }
//     item {
//       itemID
//     }
//   }
// }
=======
query GetCalculationRulesByMajorID({$majorID: Int) {
  getCalculationRulesByMajorID(majorID: $majorID) {
    ruleID
    description
    major {
      name
      id
    }
    minor {
      majorID
      minorID
      name
      description
    }
    item {
      itemID
    }
  }
}
>>>>>>> 3f0d4ff6a848b6fae33426a7c4245c968ff62e07


// query GetMajors($id: Int!) {
//   getMajors($id: Int!) {
//     id
//     name
//     }
// }

// query posts {
//   posts {
//     title
//     content
//     views
//     author {
//       name
//     }
//   }
}`
  })
);

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Go to ${process.env.PORT || 3000} to run queries!`);
});
