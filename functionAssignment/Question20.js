
/* ================= Question - 20 ================ */

  // Merge sort implementation (Recursion)
  let mergeSort = unsortedArr => {
    
    // Base case ~ No need to sort the array only has one element or empty
    if (unsortedArr.length <= 1){
      return unsortedArr;
    }
  
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.round(unsortedArr.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArr.slice(0, middle);
    const right = unsortedArr.slice(middle);

    // using recursion to combine the left and right
    return merge(mergeSort(left), mergeSort(right));
  }

  // ------------ Merge Funtion ------------

  // Merge the two arrays: left and right
  const merge = (left, right) => {

    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // we will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]){
              resultArray.push(left[leftIndex]);
              leftIndex++; //move left array cursor
            } else {
              resultArray.push(right[rightIndex]);
              rightIndex ++; //move right array cursor
            }
    }

    // we need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  let num = [1,9,0,-2,10,-1,3];
  console.log(mergeSort(num));


  
  /* ================= Question - 20b ================ */


  // Merge sort implementation (Iterative)
  const mergeSortI = unsortedArr => {

    //base case ~ don't need to do anything for array with index 0;
    if (unsortedArr.length < 1){
      return unsortedArr;
    }

    var sortArr = [ ], len = unsortedArr.length; //an array the stores sorted values

    // iterate through the array and store the value to the sort array
    for(let  i = 0; i < len; i++){
        sortArr.push( [unsortedArr[i]] ); 
    }
    sortArr.push([]); //in case of odd number of items

    for (let limit = len; limit > 1; limit = Math.floor((limit + 1) / 2)){
        for ( j = 0, k = 0 ; k < limit ; j++, k +=2) {
            sortArr[j] = mergeI(sortArr[k], sortArr[k+1]);
                 
        }
        sortArr[j] = [ ]; //incase of odd numbers of items
    }

    return sortArr[0];
    
  }

  let numb = [1, 9, 0, -2, 10, -1, 3];
  console.log(mergeSortI(numb));



 // ------------ Merge Funtion ------------

  // Merge the two arrays: left and right
  function mergeI(left, right) {

    let resultArray = [ ]; 
    //let leftIndex = 0, rightIndex = 0;

    // we will concatenate values into the resultArray in order
    while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]){
              resultArray.push(left.shift());
              //leftIndex++; //move left array cursor
            } else {
              resultArray.push(right.shift());
              //rightIndex ++; //move right array cursor
            }
    }

    // we need to concat here because there will be one element remaining
    // from either left OR the right
    resultArray = resultArray.concat(left).concat(right);

    //make sure remaining arrays are empty
    /* left.splice(0, left.length);
    right.splice(0, right.length); */

    return resultArray;
  }


  