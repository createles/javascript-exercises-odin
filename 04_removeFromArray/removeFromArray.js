const removeFromArray = function(arraySet, ...deleter) {
    return arraySet.filter(function(item) {
        return !deleter.includes(item);
    });


}

// Do not edit below this line
module.exports = removeFromArray;
