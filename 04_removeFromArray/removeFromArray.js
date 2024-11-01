const removeFromArray = function(items, ...removeThese) {
    let newItems = [...items];  // create a new independent "deep copy" of the array
                                // so I won't modify the original one
    newItems = newItems.filter(item => !removeThese.includes(item));
    return newItems;
};

// Do not edit below this line
module.exports = removeFromArray;
