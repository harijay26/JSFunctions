/* ================= Question - 13 ================ */

maybe = (p1, p2) => {
  return x => {
    return p1(x) || p2(x);
  }
}

//function myFunction1(x)
myFunction1 = x => {
  return x > 100;
}

//function myFunction2(x)
myFunction2 = x => {
  return x;
}

let check = maybe(myFunction1, myFunction2);

console.log(check(103));