# Training JS #9: loop statement --while and do..while

[Kata Link](https://www.codewars.com/kata/57216d4bcdd71175d6000560/javascript)

**Task**
Coding in function `padIt`, function accept 2 parameters:

`str`, it's a string representing the string to pad, we need pad some `"*"` at leftside or rightside of str
n, it's a number, how many times to pad the string.

**Behaviour**
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one _ to `str`, alternating on which side it is padded: the first time will add a `_`to the left side of str, the second time will add a`\*` to the right side, and so on.

Finally, return the padded string.

# Ideal Solution

[Codewars solution link](https://www.codewars.com/kata/reviews/572183666d3771438f000012/groups/572e1508eb82892557000f71)

```
function padIt(str, n) {
  while (n > 0) {
    if (n % 2 === 0) {
      str = str + "*";
    } else {
      str = "*" + str;
    }
    n--;
  }
  return str;
}
```
