'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
// destructuring players array
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
// implementing rest operators
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

///3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
// printGoals('Devis', 'Muller', 'Lewandowpski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win!');
team1 > team2 && console.log('Team 2 is more likely to win!');

///////////////////////////////////////
// coding challenge 3
// 1.
for (const [x, y] of game.scored.entries()) {
  console.log(`Goal ${x + 1}: ${y}`);
}

// 3.
console.log(`Odds of victory ${game.team1}: ${game.odds.team1} `);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odds of victory ${game.team2}: ${game.odds.team2}`);

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}

average /= odds.length;
console.log(average);

///////////////////////////////////////////////////////////////////////
// coding challenge 4
