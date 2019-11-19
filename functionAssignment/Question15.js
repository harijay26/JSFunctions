/* ================= Question - 15 ================ */

let dogBreeds = ["Dachsund", "German Shepard", "Great Dane", "Cocker Spaniel", "Border Collie", "Rottweiler", "Poodle", "Doberman"];

// Filter Function
const filterFuc = () => {

  let filtered = dogBreeds.filter(dog => dog.includes("er")
  );
  return filtered;
}

console.log(filterFuc());