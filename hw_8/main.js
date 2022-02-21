class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
    }
    getInfo() {
        return ' Student ' + this.course + ' of ' + this.university + ' University, ' + this.fullName;
    }
    get estimates() {
        return this.marks
    }
    set estimates(est) {
        this.marks.push(est);
    }
    getAverageMark() {
        const averageMark = this.marks.flat().reduce((total, i) => total + i);
        return averageMark / this.marks.flat().length
    }
    get dismiss() {
        this.marks = null;
    }
    get recover() {
        return this.marks
    }
    

}

const student1 = new Student("Harvard", "course 4", "Barack Hussein Obama");
const student2 = new Student("Stanford", "course 4", "Sergei Mikhailovich Brin");
const student3 = new Student("Berkeley", "course 3", "John Charles Fields");
console.log('Task # 2:', student2.getInfo());
student1.marks = [5, 5, 4, 5];
student2.marks = [5, 4, 4, 5];
student3.marks = [5, 4, 5, 5];
console.log('Task # 3:', student1.estimates);
student1.estimates = 5;
console.log('Task # 4:', student1.marks);
console.log('Task # 5:', student1.getAverageMark());
student1.dismiss;
console.log('Task # 6:', student1.marks);
student1.recover;
console.log('Task # 7:', student1.marks);

class BudgetStudent extends Student {
    constructor (scholarship,university, course, fullName, marks){
        super (university, course, fullName, marks);
        this.scholarship = scholarship;
        
        {
            setInterval(() => ( this.getScholarship()),10000);
        }
    }
    getScholarship() {
        return console.log('Advanced #2 , #3 :'+' Student ' + this.fullName + ' You got it ' + this.scholarship + '$ Scholarship ') ;
    }
    getMarksScholarship() {
        if (budgetStudent.getAverageMark() < 4.0 ) {
        return console.log('Advanced # 4:'+' Student ' + this.fullName + " You didn't get it  Scholarship ")
        } else {
            return console.log('Advanced # 2:'+' Student ' + this.fullName + ' You got it ' + this.scholarship + '$ Scholarship ') ;
        }
    }

}
const budgetStudent = new BudgetStudent(" ","Harvard", "course 4", "Barack Hussein Obama"," ");
budgetStudent.marks = [2, 4, 4, 5];
budgetStudent.scholarship = 1400;
budgetStudent.getMarksScholarship();

