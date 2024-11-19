const reverseString = function(string) {
    let reversedString = '';
    let i = string.length - 1;
    for (i; i >= 0; i--) {
        reversedString += `${string[i]}`;
    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
