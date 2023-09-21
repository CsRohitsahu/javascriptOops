class Student{
    constructor(name,email){
        this.name=name;
        this.email=email;
        this.enrolledcourse=[];
    }
    enroll(course){
        this.enrolledcourse.push(course);
    }
    showCourse(){
        console.log(`${this.name}'s enrolled course:`);
        for(let course of this.enrolledcourse){
            console.log(course);
        }
    }

}
class Admission{
    constructor(){
        this.enrolledStudent=[];
    }
    assignCourse(student,course){
        student.enroll(course)
        console.log(`${student.name} has been enrolled in ${course} `);

    }
    enrollStudent(student){
        this.enrolledStudent.push(student)
        console.log(`${student.name} has been enrolled`);
    }
    showEnrolledStudents(){
        console.log("enrolled students");
        for(let student of this.enrolledStudent){
            console.log(`-${student.name}(${student.email})`);
        }
    }

}

const admissionOffice=new Admission();

const student1=new Student("Rohit","rohit@sahu");
const student2=new Student("Amit","amiit@gupta");

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourse(student1,"Full stack web development")
admissionOffice.assignCourse(student2,"Data Science masters")

student1.showCourse();
student2.showCourse();

admissionOffice.showEnrolledStudents();




