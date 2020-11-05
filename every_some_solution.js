const states = ["California", "New York", "New Jersey", "Alaska", "New Mexico", "Montana"]

//Use this handy string method to find the solution: startsWith("New")

//Do some of the states in the array start with "New"?
const some = states.some(state => state.startsWith("New"));
console.log("Do some states start with 'New'?", some)

//Does every state in the array start with "New"?
const every = states.every(state => state.startsWith("New"));
console.log("Does every state start with 'New'?", every)