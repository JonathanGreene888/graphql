import { find, filter } from "lodash";

import { authors, masterRuleContent, posts } from "./data";

const resolvers = {
  Query: {
    author: (_, { id }) => find(authors, { id }),
    getMasterRuleContent: () => masterRuleContent,
    posts: () => posts
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
