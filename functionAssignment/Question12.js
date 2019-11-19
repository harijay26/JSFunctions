/* ================= Question - 12 ================ */
    
const greaterThan = (n) => {
    const checkValue = (m) => {
          return m > n;
    }
    return checkValue;
    //return m => m > n; // Can also be written as; function checkValue(m){m > n}
  }

  let check_Value = greaterThan(2); // returns function checkValue(2) { m > 2 }
  console.log(check_Value(1));

  //Another way of calling the function
  //console.log(greaterThan(2)(6));


  // ------------ Q - 12b ---------------

  /* function greaterThan(n) {
    return m => m > n;
  }

  let check_Value = greaterThan(2); // returns function checkValue(2) { m > 2 }

  console.log(check_Value(1));

  console.log(greaterThan(2)(6)); */