// Project Plan:
// 1st step is get rid of any punctuation, spaces or other irrelevant characters via regex
// 2nd step is make it all lowercase
// 3rd step is create a new reversed string
// 4th step is compare the new string to the original string


const palindromes = function(text) {
    let originalText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
    originalText = originalText.toLowerCase();
    let reversedText = originalText.split('').reverse().join('');
    return originalText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
