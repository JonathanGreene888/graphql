const typeDefs = `
  type Author {
    id: ID!
    name: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    content: String
    views: Int
    author: Author
  }

  type GetWeeksOfDemandDefaultMasterRule {
    smooth: Int!
    WeeksOfDemandFactors: [WeeksOfDemandFactor]
  }

  type WeeksOfDemandFactor {
    factor: Int
    threshold: Int
  }

  type GetMajors {
    id: ID!
    name: String!
  }

  # The schema allows the following query:
  type Query {
    author(id: Int!): Author
    posts: [Post]
    getWeeksOfDemand: [GetWeeksOfDemandDefaultMasterRule]
    getMajors: [GetMajors]
  }
`;

export default typeDefs;
