function padIt(str, n) {
  let count = 1;
  let paddedString = str;

  while (count < n + 1) {
    count % 2 === 0
      ? (paddedString += "*")
      : (paddedString = "*" + paddedString);
    count++;
  }

  return paddedString;
}
