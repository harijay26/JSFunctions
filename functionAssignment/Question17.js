/* ================= Question - 17 ================ */

var players = [{
    id: 10,
    name: "Caldwell Pope",
    years: 10
  },
  {
    id: 2,
    name: "Lebron James",
    years: 15
  },
  {
    id: 41,
    name: "Vince Carter",
    years: 22
  },
  {
    id: 99,
    name: "Zion Williams",
    years: 1
  }
];

// Reduce function
reduceFunc = () => {

  let totalYears = players.reduce((acc, player) => acc + player.years, 0);
  return console.log(totalYears);
}

reduceFunc();