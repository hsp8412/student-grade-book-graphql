import {Students, StudentCourse, Courses} from "../Data";

export const resolvers = {
    Query: {
        students: () => Students,
        student: (_,args) =>{
            const studentId = args.id
            return Students.find((student)=>student.id == Number(studentId))
        }
    },
    Student:{
        courses: (parent) => {
            const records = StudentCourse.filter((record)=>{
               return record.studentId == parent.id
            })
            let courses = []
            records.forEach((record)=>{
                courses.push(Courses.find((course)=>{
                    return course.id == record.courseId
                }))
            })
            return courses
        }
    },
    Mutation:{
        createStudent: (parent, args)=> {
            const {firstName, lastName, gender, isActive} = args.input
            const id = Students[Students.length-1].id + 1
            let student = {
                id,
                firstName,
                lastName,
                gender,
                isActive
            }
            Students.push(student)
            return student
        },
        updateStudent:(parent,args) =>{
            const {id, firstName, lastName, gender, isActive} = args.input
            const properties = {firstName, lastName, gender, isActive:Boolean(isActive)}
            const index = Students.findIndex(student=>student.id==Number(id))
            if(index == -1){
                return null
            }
            for(const property in properties){
                if(args.input[property] || typeof (args.input[property]) == "boolean"){
                    Students[index][property] = args.input[property]
                }
            }
            return Students[index]
        },
        deleteStudent:(parent, args)=>{
            const {id} = args.input
            const deletedStudent = Students.find(student=>student.id === Number(id))
            const index = Students.findIndex(student=>student.id===Number(id))
            Students.splice(index,1)
            return deletedStudent
        }
    }
};