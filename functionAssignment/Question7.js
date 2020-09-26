/* ================= Question - 7 ================ */


reverseString = str => {
  return str.split(" ").reverse().join(" ");
};

const input = 'how are you doing'
console.log(reverseString(input));