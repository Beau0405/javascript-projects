let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astroID: 1,
   move: function () {return Math.floor(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astroID: 2,
   move: function () {return Math.floor(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astroID: 3,
   move: function () {return Math.floor(Math.random()*10)}
};

let dog ={
   name:"Leroy",
   species:"Beagle",
   mass: 14,
   age: 5,
   astroID: 4,
   move: function () {return Math.floor(Math.random()*10)}
};

let toughAnimal = {
   name:"Almina",
   species:"Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astroID: 5,
   move: function () {return Math.floor(Math.random()*10)}
};

let crew = [superChimpOne, salamander, superChimpTwo, dog, toughAnimal];

function crewReports(animal) {
   let crewReport = console.log( `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astroID}.`);

   return crewReport;
}

for (let i = 0; i < crew.length; i++){
   crewReports(crew[i]);
}


function fitnessTest(candidates){
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       }
       results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   
   return results;
  }
  console.log(fitnessTest(crew));
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!