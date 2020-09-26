/* ================= Question - 18 ================ */

var starwars = [{
          id: 5,
          name: "Luke Skywalker",
          pilotingScore: 98,
          shootingScore: 56,
          isForceUser: true
     },
     {
          id: 82,
          name: "R2D2",
          pilotingScore: 73,
          shootingScore: 99,
          isForceUser: false
     },
     {
          id: 22,
          name: "Jabba the Hut",
          pilotingScore: 20,
          shootingScore: 59,
          isForceUser: false
     },
     {
          id: 15,
          name: "Kylo Ren",
          pilotingScore: 43,
          shootingScore: 67,
          isForceUser: true
     },
     {
          id: 11,
          name: "Yoda",
          pilotingScore: 71,
          shootingScore: 85,
          isForceUser: true
     }
];

// Map, reduce and filter function together
mapReduceFilterFunc = () => {

     let totalScore = starwars.filter(forceUser => forceUser.isForceUser).
     map(gameScore => gameScore.pilotingScore + gameScore.shootingScore).
     reduce((acc, score) => acc + score, 0)

     return totalScore;
}

console.log(mapReduceFilterFunc());