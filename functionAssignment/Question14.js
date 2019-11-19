/* ================= Question - 14 ================ */

// compose creates a pipeline of function with the output of one function connected to the input of the next.
// compose takes multiple functions as arguments and we convert them into an array of functions using the spread opeartor: ...
// Then we simply apply a reduceRight on those functions. The first parameter of the callback is the current argument. 
//The second argument is the current function. Then we call each function with the current argument and the result is use for the next call.
const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);


//I added trace() to this algorithm to inspect the values between functions for clarity!
const trace = label => value => { // used curried method on label and value (can be written; trace(label,value))
  console.log( `${ label }: ${ value }` );
  return value;
};

//Compositions listed
const g = x => x - 5;
const f = x => x + 1;
const e = x => x * 2;

// Note: trace() funtion application order is bottom-to-top:
//Compose() function called and passed the compositions
const myFunc = compose( trace('after e'), e, trace('after f'), f, trace('after g'), g);

// function called and passed value of 100
console.log(myFunc(100));
