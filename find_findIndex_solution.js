const grades = [99, 83, 65, 87, 91, 77]

//Find the first grade that is less than 80.
const underEighty = grades.find(element => element < 80)
console.log("First grade under 80", underEighty)

//Find the index of the first grade that is over 80.
const overEighty = grades.findIndex(element => element > 80)
console.log("Index of first grade over 80", overEighty)