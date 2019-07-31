import { find, filter } from "lodash";
import { authors, masterRuleContent, posts, majors, rules } from "./data";

const resolvers = {
  Query: {
    posts: () => posts,
    author: (_, { id }) => find(authors, { id }),
    getMajors: () => majors,
    getMasterRuleContent: () => masterRuleContent,
    getCalculationRulesByMajorID: (_, { majorID }) => rules
  },

  Mutation: {
    upvotePost: (_, { postId }) => {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      return post;
    }
  },

  Author: {
    posts: author => filter(posts, { authorId: author.id })
  },

  Post: {
    author: post => find(authors, { id: post.authorId })
  }
};

export default resolvers;
