/* ================= Question - 19 ================ */

// Bubble sort implementation (Iterative)
const swapNumbers = (arr, i, j) => { // swap numbers function

    let temp = arr[i]; //save element value because it will change when we swap/reassign
    arr[i] = arr[j]; // assign element2 to element1
    arr[j] = temp; //assign element1 to element2
    
  };
  

const bubbleSort = arr => { // Bubble sort function
   
    for(let i = 0; i < arr.length; i++){  //iterate over array from first element. Counter ~ iterate n times of the array
      for(let j = 1; j < arr.length; j++){ //iterate over array from succeeding element. Checks the element in the array
        if (arr[j - 1] > arr[j]){ //iterate if first element is greater than proceeding element
          swapNumbers(arr, j - 1, j) //swap numbers
        }
      }
    }
    return arr; //Return arr
}

let sortArray = [6, 5, 3, 1, 8, 7, 2, 4];
  console.log(bubbleSort(sortArray));



  
/* ================= Question - 19b ================ */

// Bubble sort implementation (Recursive)
function bubbleSortR(ar){
  
    if (ar.length === 0){ //base case
      return ar;
    }
        bubbled = ar.sort((a,b) => a - b ); //using the sort metthod
  
        return bubbled;
  }
  
  
  let sortAr = [6, 5, 3, 0, 1, 8, 7, 2, 4];
  console.log(bubbleSortR(sortAr));