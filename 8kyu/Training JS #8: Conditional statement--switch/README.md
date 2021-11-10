# Training JS #8: Conditional statement--switch

[Kata Link](https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript)

**Task**
Complete function `howManydays`, function accept 1 parameters: `month`, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

```
+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
```

little tips: Use default for most of the cases can reduce your work.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.

# Ideal Solution

Switch statements are hard to grok. An object literal and constants make this kata easier to read by other devs.

[Codewars solution link](https://www.codewars.com)

```
const howManydays = monthNumber => {

const THIRTY_ONE_DAYS = 31;
const THIRTY_DAYS = 30;
const TWENTY_EIGHT_DAYS = 28;

const days = {
  1: THIRTY_ONE_DAYS,
  2: TWENTY_EIGHT_DAYS,
  3: THIRTY_ONE_DAYS,
  4: THIRTY_DAYS,
  5: THIRTY_ONE_DAYS,
  6: THIRTY_DAYS,
  7: THIRTY_ONE_DAYS,
  8: THIRTY_ONE_DAYS,
  9: THIRTY_DAYS,
  10: THIRTY_ONE_DAYS,
  11: THIRTY_DAYS,
  12: THIRTY_ONE_DAYS,
}

 return days[monthNumber];

};
```
