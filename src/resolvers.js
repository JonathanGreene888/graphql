import { find } from 'lodash';
import { masterRuleContent, majors, rules, ruleContent, ruleDetailContent } from './data';

const resolvers = {
    Query: {
        getMajors: () => majors,
        getMasterRuleContent: () => masterRuleContent,
        getCalculationRulesByMajorID: (_, { majorID }) => rules,
        getWeeksOfDemandRuleContentByID: (_, { ruleID }) => ruleContent,
    },

    Mutation: {
        updateWeeksOfDemandRule: (_, { input }) => {
            const rule = find(rules, { id: input });
            if (rule) {
                throw new Error(`Couldn't find rule with id ${input}`);
            }
            return ruleID, input;
        },
    },
};

export default resolvers;
