import casual from 'casual';
import { MockList } from 'graphql-tools';

export default {
    // Here you could customize the mocks.
    // If you leave it empty, the default is used.
    // You can read more about mocking here: http://bit.ly/2pOYqXF

    // Use functions to specific default values per type in the schema, for example
    Int: () => 7,
    String: () => 'Default Message',

    // Also customize your types and their fields too!
    Post: () => ({
        // Use casual to generate cool title for the posts
        title: casual.title,
        // and set the views range
        views: casual.integer(0, 200),
    }),
    Author: () => ({
        // Use casual for names too
        name: casual.name,
        // Returns 5 posts
        posts: () => new MockList(5),
    }),

    Query: () => ({
        // By default only two mocks are generated, here we use
        // graphql-tools MockList object to vary between 1 and 7 posts
        posts: () => new MockList([1, 7]),
    }),
};
