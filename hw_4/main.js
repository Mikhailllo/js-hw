//  #
const students = "Олександр ,Ігор , Олена, Іра, Олексій, Світлана ";
const themes = "Диференційне рівняння, Теорія автоматів, Алгоритми і структури даних";
const marks = '4, 5, 5, 3, 4, 5';
const are1 = students.split(",",);
const are2 = themes.split(",");
const are3 = marks.split(",",);
// #1.1
// are1.forEach((name, index, arr) => {
//     document.writeln(`${index + 2} ${name} i ${arr[index + 2]} <br>`);
// });

//  #1
const are = [];
const areCouple = are.concat([[are1[0],are1[2]],[are1[1],are1[3]],[are1[4],are1[5]]]);
console.log(areCouple);

// #2
const themesCouple = (areCouple ,are2) => {
    const areCoupleThem = [];
for(let = i = 0; i < areCouple.length ; i++){
    areCoupleThem.push([areCouple[i].join(' i '), are2[i]]);
}
    return areCoupleThem
}
console.log(themesCouple(areCouple,are2));

//  #3
const studentMarks = (are1,are3) => {
    const marksStudents = [];
for(let = i= 0; i < are1.length; i++){
    marksStudents.push([are1[i],are3[i]]);
}
    return marksStudents
}
console.log(studentMarks(are1,are3));


//  #4 
const marksRandom = () => Math.round(Math.random() * (5 - 1) + 1);

const marksCoupleRandom = () => {
    const coupleThem =[...themesCouple(areCouple,are2)]
    const coupleRandomMarks = [];
for(let = i = 0; i < coupleThem.length; i++){
    coupleRandomMarks.push([coupleThem[i],marksRandom()]);
} 
    return coupleRandomMarks
}
console.log(marksCoupleRandom());
document.writeln(marksCoupleRandom())
