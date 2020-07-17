console.log("Marks and Grade");

let marks=prompt("Enter your marks");

if(marks==70){
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks==50){
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks==30){
    console.log(`Marks are ${marks} and grade is C`);
}
else{
    console.log(`Are you fail`);
}

//using switch case
//let marks1=70;
// let marks1=prompt("Enter your marks");
// switch(marks1){
//     case 'A':
//     console.log(`Marks are ${marks1} and grade is A`);
//     break;
//     case 'B':
//         console.log(`Marks are ${marks1} and grade is B`);
//         break;
//     case 'C':
//         console.log(`Marks are ${marks1} and grade is C`)
//         break;
//     default:
//         console.log(`Are you fail`);
//         break;
// }
//using Ternary
