# JSFunctions

## Recursion/Iteration
Q.3) Write a recursive method that has one parameter which is an int value called x. The method prints (console.log) x asterisks, followed by x exclamation points. Do NOT use any loops. Do NOT use any variables other than x.

Q.4) Given a string, compute recursively a new string where all the adjacent chars are now separated by a "*", e.g. yourFunction("hello") → "h*e*l*l*o"

Q.5) Write a recursive method with two int parameters, m and n. The precondition requires 0 <= m and m <= n. The method prints (console.log) a line of m asterisks, then a line of m+1 asterisks, and so on up to a line of n asterisks. Then the same pattern is repeated backward: a line of n asterisks, then n-1, and so on down to n. The only loop allowed in your implementation is a loop to print a line of m asterisks. You may have two copies of this loop in different places of the implementation.

Q.6) Write a method with one positive int parameter called n. The method will write 2n-1 integers Here are the patterns of output for various values of n: n=1: Output is: 1, n=2: Output is: 1 2 1, n=3: Output is: 1 2 1 3 1 2 1, n=4: Output is: 1 2 1 3 1 2 1 4 1 2 1 3 1 2 1, etc. Note that the output for n always consists of the output for n-1, followed by n itself, followed by a second copy of the output for n-1.

Q.7) Write a recursive function to reverse a string. Write a recursive function to reverse the words in a string, i.e., ”how are you doing” becomes ”doing you are how”.

Q.8) A word is considered elfish if it contains the letters: e, l, and f in it, in any order. For example, we would say that the following words are elfish: whiteleaf, tasteful, unfriendly, and waffles, because they each contain those letters. Write a function called elfish() that, given a word, tells us if that word is elfish or not.

Q.11) Write a function that contains another function that can write a greeting to any given name. For example, greeter(“Hello”)(“Will”); would output “Hello, Will!”

Q.12) Write a function that returns a function that in turn returns true/false if a given number M is greater than a second given number e.g. return p => p > r;

Q.13) Write a maybe function that, given a predicate (a function that returns a boolean value) and any other function, only calls the latter if the former returns true: maybe(x => x > 100, myFunction). If the predicate returns true, the value of x should be passed to myFunction. If it the predicate returns false, x should be returned unchanged.

Q.14) Write a compose function that returns the result of all the functions passed into it, passing the returned value of a function to the function on its left: const myFunction = compose(x => x*2, x => x + 1, x => x - 5); given myFunction(100) the result should be 192.

## Filter, Map, Reduce
Q.15) Write a filter function in JavaScript that filters the following array of dog breeds for the string “er”: ["Dachsund", "German Shepard", "Great Dane", "Cocker Spaniel", "Border Collie", "Rottweiler", "Poodle", "Doberman"]

Q.16) Write a JavaScript map function that manipulates the following array and returns only the IDs in a separate array.
var employees = [{ id: 12, name: 'Davis Zion' }, { id: 89, name: 'Jerry Ball' }, { id: 45, name: 'Silver Adam' },
{ id: 23, name: 'Jordan James' } ];

Q.17) Write a JavaScript reduce function that manipulates the following array and the sum of the years of experience of the players.
var players = [
{
id: 10,
name: "Caldwell Pope",
years: 10,
},
{
id: 2,
name: "Lebron James",
years: 15,
},
{
id: 41,
name: "Vince Carter",
years: 22,
},
{
id: 99,
name: "Zion Williams",
years: 1,
}
];

Q.18) Chain together and use map, reduce and filter to obtain the total score of force users only from the following array.
var starwars = [
{
id: 5,
name: "Luke Skywalker",
pilotingScore: 98,
shootingScore: 56,
isForceUser: true,
},
{
id: 82,
name: "R2D2",
pilotingScore: 73,
shootingScore: 99,
isForceUser: false,
},
{
id: 22,
name: "Jabba the Hut",
pilotingScore: 20,
shootingScore: 59,
isForceUser: false,
},
{
id: 15,
name: "Kylo Ren",
pilotingScore: 43,
shootingScore: 67,
isForceUser: true,
},
{
id: 11,
name: "Yoda",
pilotingScore: 71,
shootingScore: 85,
isForceUser: true,
},
];

## Sorting
Q.19) Write an iterative and recursive version of a bubble sort function in JavaScript.

Q.20) Write an iterative and recursive version of a merge sort function in JavaScript.
