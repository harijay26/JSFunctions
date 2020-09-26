/* ================= Question - 19 ================ */

let sortArray = [6, 5, 3, 1, 8, 7, -1, 2, 4];

// Bubble sort implementation (Iterative)
swapNumbers = (arr, i, j) => { // swap numbers function

  let temp = arr[i]; //save element1 value because it will change when we swap/reassign
  arr[i] = arr[j]; // assign element2 to element1
  arr[j] = temp; //assign element1 to element2

};


bubbleSort = arr => { // Bubble sort function

  for (let i = 0; i < arr.length; i++) { //iterate over array from first element. Counter ~ iterate n times of the array
    for (let j = 1; j < arr.length; j++) { //iterate over array from succeeding element. Checks the element in the array
      if (arr[j - 1] > arr[j]) { //iterate if first element is greater than proceeding element
        swapNumbers(arr, j - 1, j) //swap numbers
      }
    }
  }
  return arr; //Return arr
}


const input = bubbleSort(sortArray)
console.log(input);




/* ================= Question - 19b ================ */

// Bubble sort implementation (Recursive)
bubbleSortR = ar => {

  if (ar.length === 0) { // base case
    return ar;
  }
  bubbled = ar.sort((a, b) => a - b); // using the sort method

  return bubbled;
}


const display = bubbleSortR(sortArray)

console.log(display);