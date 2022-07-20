## SOLUTIONS

### Alternate Solution 1
```js
function findLongestWordLength1(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
```
### Explanation of Solution 1:
Take the string and convert it into an array of words.  Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word.  At the end of the loop just return the number value of the variable maxLength.

### REFERENCE LINKS:
- [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

### Alternate Solution 2
```js
function findLongestWordLength2(s) {
  return s.split(' ').reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
}
```
### Explanation of Solution 2:
For more information on `reduce` [click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

In case you're wondering about that `0` after the callback function, it is used to give an initial value to the `longest`, so that `Math.max` will know where to start.

### REFERENCE LINKS:
- [JS Reduce](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data)
- [JS Math Max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

### Alternate Solution 3
```js
function findLongestWordLength3(str) {
  return Math.max(...str.split(' ').map((word) => word.length));
}
```
### Explanation of Solution 3:
We provide `Math.max` with the length of each word as argument, and it will simply return the highest of all.

Let's analyze everything inside the `Math.max` parentheses to understand how we do that.

`str.split(" ")` splits the string into an array, taking spaces as separators.  It returns this array: `["Th", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]`.

Then, we will make another array, made from the lengths of each element of the `str.split(" ")` array with `map()`.

`str.split(" ").map(word => word.length)` returns `[3, 5, 5, 3, 6, 4, 3, 4, 3]`.

Finally, we pass the array as arguments for the Math.max function with the spread operator `[...]`.

For more information on `map` [click here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Alternate Solution 4
```js
function findLongestWordLength4(str) {
  // split the string into individual words
  const words = str.split(' ');

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[o].length,
    findLongestWordLength4(words.slice(1).join(' '))
  );
}
```
### Explanation of Solution 4:
The first line splits the string into individual words.  Then we check if `words` only has 1 element left.  If so, then that is the longest element and we return it.  Otherwise, we remove the first element and recursively call the function `findLongestWord`, returning the maximum between the length of the first result and the recursive call.

### REFERENCE LINKS:
- [JS Functions](https://www.youtube.com/watch?v=R8SjM4DKK80)
- [Recursion Basics] (https://www.youtube.com/watch?v=k7-N8R0-KY4)
