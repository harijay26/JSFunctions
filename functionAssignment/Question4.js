/* ================= Question - 4 ================ */

wordSplitter = str => {

    return str.split('').join('*')
};

const input = "hello";
console.log(wordSplitter(input));