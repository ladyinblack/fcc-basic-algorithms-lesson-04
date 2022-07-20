// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Find the Longest Word in a String</h1>`;

/** TODO:
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 
 function findLongestWordLength(str) {
   return str.length;
 }
 
 findLongestWordLength("The quick brown fox jumped over the lazy dog");
 */

function findLongestWordLength(str) {
  let splitStr = str.split(' ');
  let lengthSplitStr = [];
  for (const word of splitStr) {
    lengthSplitStr.push(word.length);
  }
  /* Find the longest word in the array */
  let longestWord = 0;
  for (let i = 0; i < lengthSplitStr.length; i++) {
    if (lengthSplitStr[i] > longestWord) {
      longestWord = lengthSplitStr[i];
    }
  }
  // console.log(lengthSplitStr);
  // console.log(longestWord);
  // return str.length;
  // return splitStr;
  return longestWord;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
console.log(findLongestWordLength('May the force be with you'));
console.log(findLongestWordLength('Google do a barrel roll'));
console.log(
  findLongestWordLength(
    'What is the average airspeed velocity of an unladen swallow'
  )
);
console.log(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  )
);
