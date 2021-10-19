# Convert a String to a Number!

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

## Examples

```
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
```

# Ideal Solutions

[Number()](https://www.codewars.com/kata/reviews/54582010888e98e127000142/groups/54591abdcbae2a93ea0007e4)

```
var stringToNumber = function(str){
  return Number(str);
}
```

[parseInt()](https://www.codewars.com/kata/reviews/54582010888e98e127000142/groups/545891f9cbae2ae9e6000046)

```
var stringToNumber = function(str){
  return parseInt(str);
}
```
