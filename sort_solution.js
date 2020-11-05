//Sort the following array alphabetically
let pets = ["dog", "cat", "rabbit", "hamster"];
pets.sort();
console.log("Alphabetically", pets);

let grades = [88, 94, 72, 99, 53, 77];

//Sort the following array from highest to lowest
grades.sort((a, b) => b - a);
console.log("Highest to Lowest", grades);

//Sort the following array from lowest to highest
grades.sort((a, b) => a - b);
console.log("Lowest to Highest", grades);
