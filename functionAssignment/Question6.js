// Initialize the variables
let a = 1;
let b = 5;

// reverse is used to change the iteration of the functions once the n value gets to n-1
let reverse = false;

prints(a, b);

function prints(m, n) {
  // Check if the values of m and n provided satisfies the function criteria
  if (m < 0 || m > n) {
    return;
  }
  // Check the direction of the iteration by using variable reverse
  // Print the *s from n to m if the reverse value is false
  else if (!reverse) {
    // Initialize the string for storing the values
    let str = '';
    // Storing the *'s got from the values of m and n
    for (let i = 1; i <= n; i++) {
      str = str + '* ';
    }
    // Printing the values with console.log
    console.log(str);

    // Check the constraint of changing the direction of the function
    if (m < n - 1) {
      return prints(m, --n);
    } else {
      reverse = true;
      return prints(m, --n);
    }
  }
  // Print the values of *s from m to n once the reverse value is true.
  else {
    let str2 = '';
    for (let j = 1; j <= n; j++) {
      str2 = str2 + '* ';
    }
    console.log(str2);

    if (n + 1 <= b) {
      return prints(m, ++n);
    } else {
      return;
    }
  }
}