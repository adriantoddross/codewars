function saleHotdogs(n) {
  const cost = (price) => n * price;

  if (n >= 5 && n < 10) return cost(95);
  if (n < 5) return cost(100);

  return cost(90);
}
