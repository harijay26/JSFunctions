/* ================= Question - 11 ================ */

const greeter = (greeting) => {
    const name = (str) => {
      return `${greeting}, ${str}!`;
    }
    return name;
  } 
  
  let displayCall = greeter("Hello")("Will");
  console.log(displayCall);