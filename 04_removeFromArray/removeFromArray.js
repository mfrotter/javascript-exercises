const removeFromArray = function(inputArray, numToRemove) {

    for (let i = 1; i < arguments.length; i++){
    const indexOfRemoval = (element) => element === arguments[i];

    if(inputArray.findIndex(indexOfRemoval) !== -1){
    inputArray.splice(inputArray.findIndex(indexOfRemoval), 1);
    }

    }

    return inputArray;


};


console.log(removeFromArray([1, 2, 3, 4], 7));

// Do not edit below this line
module.exports = removeFromArray;
