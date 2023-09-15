// Initialize Variables below
let date=  "Monday 2019-03-18";
let time= "10:05:34am";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let prepareForLiftoff = "true";
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount => 7) {
    console.log("Astronaut Count:" + astronautCount);
} else(prepareForLiftoff = False)
// add logic below to verify all astronauts are ready
if (astronautStatus === "Ready") {
console.log ("Crew Status: Ready") 
} else(prepareForLiftoff = false);
    

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    console.log("Total Mass:" + totalMassKg);
} else (prepareForLiftoff = false)

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
    console.log("Fuel Temperature Status:" + fuelLevel)
} else (prepareForLiftoff=false)
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log( "Fuel Levels Are:" + fuelLevel) 
} else (prepareForLiftoff = false)
// add logic below to verify the weather status is clear
if (weatherStatus === "clear"){
    console.log ("Weather Status:" + weatherStatus)
}else (prepareForLiftoff = false)
// Verify shuttle launch can proceed based on above conditions
if (prepareForLiftoff = true) {
    console.log("All systems are a go! Initilizing space shuttle launch sequence");
    console.log("Have a safe trip astronauts!");
} else {
    console.log("This mission is scrapped!");
}