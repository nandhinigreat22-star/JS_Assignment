// Task 2: Arrays & Array Methods

let students = [
  { name: "John", marks: 85, grade: "A" },
  { name: "David", marks: 72, grade: "B" },
  { name: "Peter", marks: 90, grade: "A+" },
  { name: "Sarah", marks: 65, grade: "C" }
];

console.log("All Students:");
students.forEach(student => {
  console.log(`${student.name} - ${student.marks} -${student.grade}`);
});

console.log("\nStudent Names:");
let studentNames = students.map(student => student.name);
console.log(studentNames);
console.log("\nStudents who scored 80 or above:");
let topStudents = students.filter(student => student.marks >= 80);
console.log(topStudents);