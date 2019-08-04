const typeDefs = `

  input WeeksOfDemandInput {
    ruleID: String
    ruleItems: [Int!]
    ruleStores: [Int!]
    smooth: Int
    thresholds: [Int]
    weeklyDemandFactors: [Int]
  }

  type WeeksOfDemandContent {
    ruleID: String
    ruleItems: [Int!]
    ruleStores: [Int!]
    smooth: Int
    thresholds: [Int]
    weeklyDemandFactors: [Int]
  }

  type WeeksOfDemandMasterRuleDetail {
    smooth: Int
    weeklyDemandFactors: [Int!]
    thresholds: [Int!]
  }

  type RuleDetail {
    smooth: Int!
    weeklyDemandFactors: [Int!]
    thresholds: [Int!]
  }

  type RuleContent {
    ruleID: String
    ruleItems: [Int!]
    ruleStores: [Int!]
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
    getMasterRuleContent: WeeksOfDemandRuleDetail
    getWeeksOfDemandRuleContentByID(ruleID: String!): RuleContent
    getMajors : [Major]
    getCalculationRulesByMajorID(majorID: Int!): [GetCalculationRulesByMajorID]
  }

  # this schema allows the following mutation:
   type Mutation {
    updateWeeksOfDemandRule (input: WeeksOfDemandInput): String!
   }
`;

export default typeDefs;
