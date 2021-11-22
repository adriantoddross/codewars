function giveMeFive(obj) {
  let fives = [];
  for (let key in obj) {
    if (key.length === 5) fives.push(key);
    if (obj[key].length === 5) fives.push(obj[key]);
  }
  return fives;
}
