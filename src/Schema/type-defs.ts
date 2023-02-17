export const typeDefs = `#graphql
    type Student{
        id:ID
        firstName:String!
        lastName:String!
        gender:Gender!
        isActive:Boolean!
        courses:[Course]
    }

    type Course{
        id:ID!
        name:String!
        department:Department!
        code:String!
        credits:Int!
        Professor:String!
    }

    enum Gender{
        MALE
        FEMALE
        OTHERS
    }

    enum Department{
        CPSC
        SENG
    }
    
    type Query{
        students:[Student]
        student(id:ID!):Student
    }
`