const repeatString = function(text, num) {
    
    if (num < 0) {
        return 'ERROR';
    } else {
        let finalString = '';
        for (let i = 1; i <= num; i++) {
            finalString = finalString + text;
        }
        return finalString;
    }
};

repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
