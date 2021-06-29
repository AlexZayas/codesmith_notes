const refactoredGreed = (dice) => {
  const possiblePoints = {
    111: 1000,
    666: 600,
    555: 500,
    444: 400,
    333: 300,
    222: 200,
    1: 100,
    5: 50,
  };

  let total = 0;

  const singlesCount = dice.reduce((singlesCache, die) => {
    if (!singlesCache[die]) singlesCache[die] = 0;
    singlesCache[die]++;

    console.log(singlesCache);

    if (singlesCache[die] === 3) {
      total += possiblePoints[`${die}${die}${die}`];
      delete singlesCache[die];
    }
    return singlesCache;
  }, {});

  Object.keys(singlesCount).forEach((die) => {
    if (possiblePoints[die]) total += possiblePoints[die] * singlesCount[die];
  });
  return total;
};

console.log(refactoredGreed([1, 1, 1, 1, 6]));
