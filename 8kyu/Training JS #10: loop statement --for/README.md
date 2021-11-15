# Training JS #10: loop statement --for

[Kata Link](https://www.codewars.com/kata/5721a78c283129e416000999/javascript)

**Task**

Coding in function `pickIt`, function accept 1 parameter: `arr`, it's a number array, we need traverse `arr` by using for loop, if element is odd number, push it to array `odd`, if it's a even number, push it to array `even`.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

## Clever Solution

[Codewars solution link](https://www.codewars.com/kata/reviews/5721bce51769bede17000083/groups/5733a138d780e27b0a00070d)

I agree with the rest of Codewars. This solution is clever and insightful.

```
function pickIt (arr) {

  let odd = []
  let even =[]

  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)
  }

  return [odd, even]
}
```
