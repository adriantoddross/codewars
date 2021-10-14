function solution(str, ending) {
  if (!ending) return true; // Needed to pass edge case: solution("abc", "")

  return str.slice(-ending.length) === ending;
}
