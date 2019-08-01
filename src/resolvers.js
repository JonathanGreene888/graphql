import { find } from 'lodash';
import { masterRuleContent, posts, majors, rules, ruleContent } from './data';

const resolvers = {
    Query: {
        getMajors: () => majors,
        getMasterRuleContent: () => masterRuleContent,
        getCalculationRulesByMajorID: (_, { majorID }) => rules,
        getWeeksOfDemandRuleContentByID: (_, { ruleID }) => ruleContent,
    },

    Mutation: {
        updateWeeksOfDemandRule: (_, { ruleID }) => {
            const rule = find(rules, { id: ruleID });
            if (!rule) {
                throw new Error(`Couldn't find post with id ${ruleID}`);
            }
            return post;
        },
    },
};

export default resolvers;
