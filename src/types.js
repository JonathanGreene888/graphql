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

  type GetCalculationRulesByMajorID {
      majorID: Int!
      ruleID: ID
      description: String
      major: [Major]
      minor: [Minor]
      item: [Item]
  }

  type Major {
    name: String!
    id: Int!
  }
  type Minor {
    majorID: Int!
    minorID: Int!
    name: String!
    description: String!
  }

  type Item {
    itemID: Int!
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
    id: Int!
    name: String!
  }

  # The schema allows the following query:
  type Query {
    author(id: Int!): Author
    posts: [Post]
    getWeeksOfDemand: [GetWeeksOfDemandDefaultMasterRule]
    getMajors: [GetMajors]
    getCalculationRulesByMajorID:[GetCalculationRulesByMajorID]
  }
`;

export default typeDefs;
