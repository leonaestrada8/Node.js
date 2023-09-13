// 4.2 - Football

class FootballStatistics {
    constructor() {
      this.games = [];
    }
  
    addGame(goals, cards, fouls) {
      this.games.push({ goals, cards, fouls });
    }
  
    calculateStatistics() {
      let totalGoals = 0, totalCards = 0, totalFouls = 0;
      let maxGoals = Number.MIN_SAFE_INTEGER, maxCards = Number.MIN_SAFE_INTEGER, maxFouls = Number.MIN_SAFE_INTEGER;
      let minGoals = Number.MAX_SAFE_INTEGER, minCards = Number.MAX_SAFE_INTEGER, minFouls = Number.MAX_SAFE_INTEGER;
  
      for (let game of this.games) {
        totalGoals += game.goals;
        totalCards += game.cards;
        totalFouls += game.fouls;
        maxGoals = Math.max(maxGoals, game.goals);
        maxCards = Math.max(maxCards, game.cards);
        maxFouls = Math.max(maxFouls, game.fouls);
        minGoals = Math.min(minGoals, game.goals);
        minCards = Math.min(minCards, game.cards);
        minFouls = Math.min(minFouls, game.fouls);
      }
  
      console.log("Statistics:");
      console.log("Average goals:", totalGoals / this.games.length);
      console.log("Average cards:", totalCards / this.games.length);
      console.log("Average fouls:", totalFouls / this.games.length);
      console.log("Max goals:", maxGoals);
      console.log("Max cards:", maxCards);
      console.log("Max fouls:", maxFouls);
      console.log("Min goals:", minGoals);
      console.log("Min cards:", minCards);
      console.log("Min fouls:", minFouls);
    }
  }
  
  const stats = new FootballStatistics();
  stats.addGame(2, 4, 10);
  stats.addGame(3, 5, 8);
  stats.addGame(1, 2, 12);
  stats.addGame(0, 3, 7);
  stats.addGame(4, 2, 9);
  stats.addGame(3, 4, 5);
  stats.addGame(2, 1, 11);
  stats.addGame(5, 3, 6);
  stats.addGame(2, 4, 7);
  stats.addGame(1, 5, 8);
  stats.calculateStatistics();
  

  