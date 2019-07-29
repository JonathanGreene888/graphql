import { find, filter } from 'lodash';

// example data
const authors = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman' },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
    { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

const posts = [
    { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
    { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
    { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
    { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

const majors = [
    { name: 'Taco', id: 1 },
    { name: 'cheeseburger', id: 2 },
    { name: 'doublecheeseburger', id: 3 },
    { name: 'red', id: 4 },
    { name: 'white', id: 5 },
    { name: 'cheese taco', id: 6 },
    { name: 'cheetos taco belgrande', id: 7 },
];

const rules = [
    {
        ruleID: 1,
        description: 'tacos are great',
        major: {
            name: 'Rainbow Taco',
            id: 5,
        },
        minor: {
            majorID: 1,
            minorID: 1,
            name: 'one',
            description: 'one',
        },
        item: {
            itemID: 1,
        },
    },
];

const resolvers = {
    Query: {
        posts: () => posts,
        author: (_, { id }) => find(authors, { id }),
        getMajors: () => majors,
        getCalculationRulesByMajorID: (_, { majorID }) => rules,
    },

    Mutation: {
        upvotePost: (_, { postId }) => {
            const post = find(posts, { id: postId });
            if (!post) {
                throw new Error(`Couldn't find post with id ${postId}`);
            }
            post.votes += 1;
            return post;
        },
    },

    Author: {
        posts: author => filter(posts, { authorId: author.id }),
    },

    Post: {
        author: post => find(authors, { id: post.authorId }),
    },
};

export default resolvers;
