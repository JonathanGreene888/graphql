import { find } from "lodash";
import { masterRuleContent, majors, rules, ruleContent } from "./data";

const resolvers = {
  Query: {
    getMajors: () => majors,
    getMasterRuleContent: () => masterRuleContent,
    getCalculationRulesByMajorID: (_, { majorID }) => rules,
    getWeeksOfDemandRuleContentByID: (_, { ruleID }) => ruleContent
  },

  Mutation: {
    updateWeeksOfDemandRule: (_, { input }) => {
      return `Hello Input ${input}`;
    },
    updateWeeksOfDemandMasterRule: (_, { input }) => {
      return `${input}`;
    }
  }
};

export default resolvers;
