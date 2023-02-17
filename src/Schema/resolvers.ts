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
    }
};