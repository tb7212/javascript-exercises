const removeFromArray = function(arr) {
    const args = Array.from(arguments).slice(1);
    return arr.filter(arg => !(args.includes(arg)));
};

// Do not edit below this line
module.exports = removeFromArray;
