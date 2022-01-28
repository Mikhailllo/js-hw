//  #
const students = "Олександр ,Ігор , Олена, Іра, Олексій, Світлана ";
const themes = "Диференційне рівняння, Теорія автоматів, Алгоритми і структури даних";
const marks = '4, 5, 5, 3, 4, 5';
const are1 = students.split(",",);
const are2 = themes.split(",");
const are3 = marks.split(",",);

//  #1
const couple1 = are1.splice(-2);
const couple2 = are1.splice(1,2);
const couple3 = are1.splice(-2);
const are = [];
const areCouple = are.concat([couple1],[couple2],[couple3]);
console.log(areCouple);

//  #2
const themesCouple1 = areCouple[(0)].concat(are2[0])
//console.log(themesCouple1);
const themesCouple2 = areCouple[(2)].concat(are2[2])
//console.log(themesCouple2);
const themesCouple3 = areCouple[(1)].concat(are2[1])
//console.log(themesCouple3);

const themesCouple = are.concat([themesCouple1],[themesCouple2],[themesCouple3]);
console.log(themesCouple);

//  #3.1
const areStudent = students.split(",",);
const studentGrades = [];
const studentGradesFunc = (areStudent,are3) => (areStudent[(0)].concat(are3[0])

)
console.log(studentGradesFunc(areStudent,are3))
// for (areStudent of are3){
//     document.writeln(`[areCouple] ${[are3]} <br> `)
// }

// #3



