
/* ================= Question - 8 ================ */

// Declaration of a boolean variable
let containsELF;
  
//function declaration
const elfish = (str) => {

  let checkLetter;
  // iterate through the character of string length
  for (i = 0; i <= str.length-1; i++){
    //Assign each character 
    checkLetter = str[i];
  }

  //Checks if E,L,F exist to true
	if (checkLetter === "e" && "l" && "f"){
		containsELF = true;
	}
	
	// base case/condition ~checks if the string contains ELF
	if (str.length === 0)
		if (containsELF){
      console.log('The word meets the ELFISH requirement!!!')
      return true; 
		}
		else {
      console.log('Try Another!! word does not meet the ELFISH requirement!!!')
			return false; 
		}
	// if not base ~returns the function if it doesn't satisfy the above conditions!
	return  elfish(str.slice(0, str.length - 1)); 
}

elfish("waffles"); 


/* ------------------ Question - 8b ----------------- */

/* let containsE;
let containsL; 
let containsF; 
	
function elfish(str){

	let checkLetter = str[str.length - 1]; 
	if (checkLetter === "e"){
		containsE = true;
	}
	else if (checkLetter === "l"){
		containsL = true; 
	}
	else if (checkLetter === "f"){
    containsF = true; 
	}
	// base case 
	if (str.length === 0)
		if (containsE && containsL && containsF){
      console.log('The word satisfy to be an ELFISH!!!')
      return true; 
		}
		else {
      console.log('Try another word that meets the ELFISH requirement!!!')
			return false; 
		}
	// if not base case 	
	return  elfish(str.slice(0, str.length - 1)); 
}

elfish("");  */