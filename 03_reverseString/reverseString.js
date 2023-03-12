const reverseString = function(stringToReverse) {
    let reverseString = [];
    if(stringToReverse === ""){
        return "";
    }

    for(let i = 0; i < stringToReverse.length; i++) {
        reverseString.unshift(stringToReverse[i]);
    }
        return reverseString.join("");
};

// Do not edit below this line
module.exports = reverseString;
