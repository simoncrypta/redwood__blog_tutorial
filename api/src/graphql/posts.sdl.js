export const schema = gql`
  type Post {
    id: Int!
    title: String!
    body: String!
    CreatedAt: DateTime!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    title: String!
    body: String!
    CreatedAt: DateTime!
  }

  input UpdatePostInput {
    title: String
    body: String
    CreatedAt: DateTime
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
