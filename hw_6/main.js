const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4],
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5],
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5],
    }
    
}];

//  #1
const getSubjects = (student) => {
    const subjectStud = Object.keys(student.subjects);
    const result = subjectStud.map(i => i.charAt(0).toUpperCase() + i.substr(1).replace(/_/gi," "));
    return result
}
console.log("#1 ",getSubjects(students[0]));

// #2
function getAverageMark(student) {
    const allMarksForStudent = Object.values(student.subjects).flat(1);
    const sum = allMarksForStudent.reduce((total, i) => total += i);
    const marksNum = allMarksForStudent.reduce(total => total += 1, 0);
    return (sum / marksNum).toFixed(2);
}
console.log("#2 ",getAverageMark(students[0]));

// #3
function getStudentsInfo(student) {
    return {
        name: student.name,
        course: student.course,
        averageMark: getAverageMark(student),
    };
}
console.log("#3 ",getStudentsInfo(students[0]));

// #4
const getStudNames = (students) => {
    const studentsNames = students.map((student) => student.name);
    return studentsNames.sort();
};
console.log("#4 ",getStudNames(students));

//  #5
const getBestStudent = (students) => {
	const averageRating = students.map((student) => Number(getAverageMark(student)));
	return students[averageRating.indexOf(Math.max(...averageRating))].name;
};
console.log("#5 ",getBestStudent(students));

// #6
const calculateWordLetters = function(word) {
    const calculated = {};
    let counter = 1;
    const arr = word.split("").sort().reverse();
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) counter ++;
        else {
            calculated[arr[i]] = counter;
            counter = 1;
        }
    }
    return calculated;
}
console.log("#6 ",calculateWordLetters("test"));
