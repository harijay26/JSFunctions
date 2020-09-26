/* ================= Question - 3 ================ */
printAsterisk = x => {
  if (x <= 0) {
    return '';
  }
  // return '*' + printAsterisk(x - 1) + '!';
  return `* ${printAsterisk(x-1)} !`;

};

const input = 5
console.log(printAsterisk(input));