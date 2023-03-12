const repeatString = function(repeatedString, numOfRepeats) {
    let newRepeatedString = "";

    if(numOfRepeats === 1){
        return repeatedString;
    }

    if(numOfRepeats === 0){
        return "";
    }

    if(numOfRepeats < 0){
        return "ERROR";
    }

    for (let i = 0; i < numOfRepeats; i++) {
        newRepeatedString += repeatedString;
    }

    return newRepeatedString;
};

// Do not edit below this line
module.exports = repeatString;
