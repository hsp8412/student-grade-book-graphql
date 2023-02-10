import {Students} from "../Data";

export const resolvers = {
    Query: {
        students: () => Students,
        student: (id) =>{
            return Students.find((student)=>student.id == id)
        }
    },
};