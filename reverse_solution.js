const condiments = ["ketchup", "mustard", "relish", "mayo"];
// Use reverse to change the order of this array.
condiments.reverse();
console.log("Reversed condiments", condiments)


const employees = ["Adams", "Carter", "Davis", "Fraklin", "Zappa"];
// Use reverse to change the order of this array, 
// but keep the original array intact.

// Use the spread operator to create a clone of the original array.
const reversed = [...employees];

reversed.reverse();
console.log("Reversed employee list", reversed)
console.log("Original employee list", employees)