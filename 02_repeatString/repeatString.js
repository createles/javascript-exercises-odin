const repeatString = function(string, number) {
    let i = number;
    let finalString = ''
    if (number >= 0) {
        for (i = 0; i < number; i++) {
            finalString += `${string}`;
        }
        return finalString;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
