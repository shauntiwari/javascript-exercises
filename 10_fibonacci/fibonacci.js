const fibonacci = function(num) {
    if (num < 0) {
        return 'OOPS';
    } else {
        let fibArray = [0, 1];
        for (let i = 1; i <= num; i++) {
            fibArray.push(fibArray[i] + fibArray[i - 1]);
        }
        return fibArray[num];
    }
};

// Do not edit below this line
module.exports = fibonacci;
