//Push, Pop, Unshift, and Shift

const foods = [
    { food: 'raspberries', type: 'fruit'},
    { food: 'orange', type: 'fruit' },
    { food: 'broccoli', type: 'vegetable'},
    { food: 'quinoa', type: 'grain'}
  ];
  const blackBeans = { food: 'black beans', type: 'legume'};
  const chiaSeeds = { food: 'chia seeds', type: 'seed'};
  
  //Challenge Question #1
  //Remove the last item in the foods array.
  foods.pop();
  console.log("Foods with last item removed", foods); 
  
  //Challenge Question #2
  //Remove the first item in the foods array.
  foods.shift();
  console.log("Foods with first item removed", foods);
  
  //Challenge Question #3
  //Add the variable chiaSeeds to the beginning of the foods array.
  foods.unshift(chiaSeeds);
  console.log("Foods with chiaSeeds added to the beginning", foods); 
  
  //Challenge Question #4
  //Add the variable blackBeans to the end of the array. 
  //What does your final array look like?
  foods.push(blackBeans);
  console.log("Final: Foods with blackBeans added to the end of the array", foods);
  
  