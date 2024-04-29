import { gql } from "graphql-tag"

export const typeDefs = gql`

    type Student {
        _id: ID!
        regno: String!
        name: String!
        marks: [Mark!]!
    }

    type Mark {
        _id: ID!
        mid: Int!
        regno: String!
        hid: Int!
        marks: Float!        
    }

    type Query{
        greeting: String
        students: [Student!]!
        marks: [Mark!]!
        student(regno: String!): Student!
    }

    type Mutation {
        updateMark(mid: Int!, mark: Float!): Mark
    }

`