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

    input CreateStudentInput{
        firstName:String!
        lastName:String!
        gender:Gender = OTHERS
        isActive: Boolean = true
    }

    input UpdateStudentInput{
        id:ID!
        firstName:String
        lastName:String
        gender:Gender
        isActive:Boolean
    }

    input DeleteStudentInput{
        id:ID!
    }

    type Mutation{
        createStudent(input:CreateStudentInput!): Student!
        updateStudent(input:UpdateStudentInput!): Student
        deleteStudent(input:DeleteStudentInput!): Student
    }
    
    type Query{
        students:[Student]
        student(id:ID!):Student
    }
`