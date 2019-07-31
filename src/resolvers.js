import { find } from 'lodash';
import { masterRuleContent, posts, majors, rules, ruleContent } from './data';

const resolvers = {
    Query: {
        getMajors: () => majors,
        getMasterRuleContent: () => masterRuleContent,
        getCalculationRulesByMajorID: (_, { majorID }) => rules,
        getWeeksOfDemandRuleContentByID: (_, { ruleID }) => ruleContent,
    },

    // Mutation: {
    // upvotePost: (_, { postId }) => {
    //     const post = find(posts, { id: postId });
    //     if (!post) {
    //         throw new Error(`Couldn't find post with id ${postId}`);
    //     }
    //     post.votes += 1;
    //     return post;
    // },
    // },
};

export default resolvers;
