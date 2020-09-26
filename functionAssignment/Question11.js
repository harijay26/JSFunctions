/* ================= Question - 11 ================ */

greeter = (greeting) => {
  const name = (str) => {
    return `${greeting}, ${str}!`;
  }
  return name;
};

const displayCall = greeter("Hello")("Will");
console.log(displayCall);