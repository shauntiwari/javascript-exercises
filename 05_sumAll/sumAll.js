const sumAll = function(int1, int2) {
    
    if ((Number.isInteger(int1) && Number.isInteger(int2)) && int1 >= 0 && int2 >= 0) {    
        const max = Math.max(int1, int2);
        const min = Math.min(int1, int2);
        let total = 0;

        for (let i = min; i <= max; i++) {
            total += i;
        }
        return total;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
