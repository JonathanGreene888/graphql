const typeDefs = `

  type WeeksOfDemandRuleDetail {
    weeksOfDemandFators: [Int!]
    thresholds: [Int!]
  }

  type RuleDetail {
    smooth: Int!
    weeksOfDemandFators: [Int!]
    thresholds: [Int!]
  }

  type RuleContent {
    ruleItems: [Int!]
    ruleStores: [Int!]
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
    getMasterRuleContent: WeeksOfDemandRuleDetail
    getWeeksOfDemandRuleContentByID(ruleID: String!): RuleContent
    getMajors : [Major]
    getCalculationRulesByMajorID(majorID: Int!): [GetCalculationRulesByMajorID]
  }

  # this schema allows the following mutation:
  # type Mutation {
  #   upvotePost (
  #     postId: Int!
  #   ): Post
  # }
`;

export default typeDefs;
