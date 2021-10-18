function enough(cap, on, wait) {
  const seatsLeft = cap - on;
  return seatsLeft >= wait ? 0 : wait - seatsLeft;
}
