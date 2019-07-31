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

  type WeeksOfDemandRuleDetail {
    weeksOfDemandFators: [Int!]
    thresholds: [Int!]
  }

  type RuleDetail {
    smooth: Int!
    weeksOfDemandRuleDetail: WeeksOfDemandRuleDetail
  }

  type RuleContent {
    items: [Int!]
    stores: [Int!]
    ruleDetail: RuleDetail
  }

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

  # the schema allows the following query:
  type Query {
    getMasterRuleContent: RuleDetail
    getWeeksOfDemandRuleContent: RuleContent
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
