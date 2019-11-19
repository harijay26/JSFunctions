/* ================= Question - 13 ================ */
    
function maybe(p1, p2) {
    return x => {
        return p1(x) || p2(x);
    }
}
  //function myFunction1(x)
  const myFunction1 = x => {
    return x > 100;
  }

  //function myFunction2(x)
  const myFunction2 = x =>{
    return x;
  }

  let check = maybe(myFunction1, myFunction2);

  console.log(check(105));