function enough(cap, on, wait) {
  // parameters:  cap = number, on = number, wait = number
  // return 0 OR number of passengers Bob can't take
  
  // init variable called space: (cap - on) - wait
  // use if/else: if (space), return 0, else return wait - space;
  // ternary: space > 0 ? : return wait - space;
  
  const seatsLeft = cap - on;
  return seatsLeft >= wait ? 0 : wait - seatsLeft;
}

// console.log(enough(25, 15, 10), 0);
// console.log(enough(10, 7, 4), 1);
// console.log(enough(12, 6, 6.5), 0.5);