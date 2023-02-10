export const typeDefs = `#graphql
    type Student{
        id:ID
        firstName:String!
        lastName:String!
        gender:String!
        isActive:Boolean!
    }
    
    type Query{
        students:[Student]
        student(id:ID!):Student
    }
`