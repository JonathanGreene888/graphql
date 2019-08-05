const typeDefs = `

  input WeeksOfDemandMasterInput {
    smooth: Int
    weeklyDemandFactors: [Int!]
    thresholds: [Int!]
  }

  input WeeksOfDemandInput {
    ruleID: String
    ruleItems: [ID!]
    ruleStores: [ID!]
    smooth: Int
    thresholds: [Int]
    weeklyDemandFactors: [Int]
  }

  type WeeksOfDemandContent {
    ruleID: String
    ruleItems: [ID!]
    ruleStores: [ID!]
    smooth: Int
    thresholds: [Int]
    weeklyDemandFactors: [Int]
  }

  type RuleDetail {
    smooth: Int
    weeklyDemandFactors: [Int!]
    thresholds: [Int!]
  }

  type RuleContent {
    ruleID: String
    ruleItems: [ID!]
    ruleStores: [ID!]
    ruleDetail: RuleDetail
  }

  type Major {
    name: String!
    id: Int!
  }

  type GetCalculationRulesByMajorID {
    ruleID: String
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
    getWeeksOfDemandRuleContentByID(ruleID: String!): RuleContent
    getMajors : [Major]
    getCalculationRulesByMajorID(majorID: Int!): [GetCalculationRulesByMajorID]
  }

  # this schema allows the following mutation:
   type Mutation {
    updateWeeksOfDemandRule(input: WeeksOfDemandInput!): String!
    updateWeeksOfDemandMasterRule(input: WeeksOfDemandMasterInput!): String!
    aSDFAS
   }
`;

export default typeDefs;
