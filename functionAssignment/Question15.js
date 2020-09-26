/* ================= Question - 15 ================ */

// Initialize array
let dogBreeds = ["Dachsund", "German Shepard", "Great Dane", "Cocker Spaniel", "Border Collie", "Rottweiler", "Poodle", "Doberman"];

// Filter Function
filterFuc = () => {

  let filtered = dogBreeds.filter(dog => dog.includes("er"));
  return console.log(filtered);
}

filterFuc(); // Call function