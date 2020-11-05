const drinks = ["coffee", "tea", "soda", "water"]
//How do we add "wine" to the array of drinks?
drinks.push("wine");
console.log("Contents of the drink array:", drinks);

const seasons = ["spring", "summer", "fall", "winter"];
//How do we remove the last season from the seasons array?
//Store the element that is removed in a variable.
const poppedValue = seasons.pop();
console.log("New list of seasons:", seasons)
console.log("Value removed from the array:", poppedValue)