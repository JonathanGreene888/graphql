const typeDefs = `
  type Author {
    id: ID!
    name: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    content: String
    views: Int
    author: Author
  }

  # The schema allows the following query:
  type Query {
    author(id: Int!): Author
    posts: [Post]
  }
`;

export default typeDefs;
