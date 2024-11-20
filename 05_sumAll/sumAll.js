const sumAll = function (start, end) {
    let final = 0;
    if (start < 0 || end < 0) {
        return "ERROR";
    } else if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    } else if (typeof start !== 'number' || typeof start !== 'number') {
        return "ERROR";
    } else if (start <= end) {
        for (let i = start; i <= end; i++) {
            final += i;
        }
        return final;
    } else {
        for (let i = end; i <= start; i++) {
            final += i;
        }
        return final;
    }
};

// Do not edit below this line
module.exports = sumAll;
