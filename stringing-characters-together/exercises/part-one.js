let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an inte
console.log(num.toString().length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45;
console.log(num2.toString().length-1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (num2.toString().includes(".")){
    console.log(num2.toString().length-1);
} else {
    console.log(num2.toString().length);
}