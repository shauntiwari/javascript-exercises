// Project Plan:
// 1st step is get rid of any punctuation and make every character lowercase
// 2nd step is spread the string into an array character by character
// 3rd step is reverse the array into a new array
// 4th step is compare the new array to the original array,
//  if they're exactly equal it's a palindrome, if not, it's not


const palindromes = function(text) {
    let originalText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    originalText = originalText.toLowerCase();
    let reversedText = originalText.split('').reverse().join('');
    return originalText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
