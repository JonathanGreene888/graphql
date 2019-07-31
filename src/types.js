// const typeDefs = `
//   type Author{
//     id: Int!
//     firstName: String
//     lastName: String
//     posts: [Post]
//   }

//   type Post {
//     id: Int!
//     authorId: Int
//     title: String
//     votes: Int
//   }

//   type GetWeeksOfDemandDefaultMasterRule {
//     smooth: Int!
//     WeeksOfDemandFactors: [WeeksOfDemandFactor]
//   }

//   type WeeksOfDemandFactor {
//     factor: Int
//     threshold: Int
//   }

//   type GetMajors {
//     id: Int!
//     name: String!
//   }

//   # The schema allows the following query:
//   type Query {
//     author(id: Int!): Author
//     posts: [Post]
//     getWeeksOfDemand: [GetWeeksOfDemandDefaultMasterRule]
//     getMajors: [GetMajors]
//     getCalculationRulesByMajorID:[GetCalculationRulesByMajorID]
//   }
// `;

const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

<<<<<<< HEAD
  type WeeksOfDemandRuleDetail {
    weeksOfDemandFators: [Int!]
    thresholds: [Int!]
  }

  type MasterRuleContent {
    smooth: Int!
    weeksOfDemandRuleDetail: WeeksOfDemandRuleDetail
  }

=======
  type Major {
    name: String!
    id: Int!
  }

    type GetCalculationRulesByMajorID {
      ruleID: ID
      description: String
      major: Major
      minor: Minor
      item: Item
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


>>>>>>> 61724bdde6cb0f0e43c2f5d7ca650c07a1dfb030
  # the schema allows the following query:
  type Query {
    getMasterRuleContent: MasterRuleContent
    posts: [Post]
    author(id: Int!): Author
    getMajors : [Major]
    getCalculationRulesByMajorID(majorID: Int!): [GetCalculationRulesByMajorID]
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;

export default typeDefs;
