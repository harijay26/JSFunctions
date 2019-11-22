/* ================= Question - 3 ================ */
const printAsterisk = (x) => {
    if (x <= 0) {
     return '';
    }   
    //return  '*' + printAsterisk(x-1) + '!' ;
    return  `* ${printAsterisk(x-1)} !` ;
      
  };
  
  console.log(printAsterisk(4));