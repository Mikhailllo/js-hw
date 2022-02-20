class Student {
    constructor(university, course, fullName,marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    getInfo() {
        return ' Student ' + this.course  + ' of ' + this.university + ' University, ' + this.fullName ;
    }
    get estimates(){
        return  this.marks 
    }
    set estimates(est){
        this.marks.push(est);
    }
    getAverageMark(){
        const averageMark = this.marks.flat().reduce((total, i) =>  total + i);
        return averageMark / this.marks.flat().length
    }
}
const student1 = new Student("Harvard","course 4", "Barack Hussein Obama");
const student2 = new Student("Stanford","course 4","Sergei Mikhailovich Brin");
const student3 = new Student("Berkeley","course 3","John Charles Fields");
console.log('Task # 2:',student2.getInfo());
student1.marks = [5, 4, 4, 5];
console.log('Task # 3:',student1.estimates);
student1.estimates = 5 ;
console.log('Task # 4:',student1.estimates);
console.log('Task # 5:',student1.getAverageMark());

