const removeFromArray = function(items, removeThis) {
    let newItems = items;
    for(let item of items) {
        if (item === removeThis) {
            newItems.splice(items.indexOf(item), 1);
        }
    }
    return newItems;
};

// Do not edit below this line
module.exports = removeFromArray;
