function rollDice(numCaras) {
    return Math.floor(Math.random() * numCaras) + 1;
  }
  
  console.log(rollDice(6));
  console.log(rollDice(20));
  console.log(rollDice(100));