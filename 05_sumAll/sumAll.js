const sumAll = function(firstNum, secondNum) {

    let sumOfAll = 0;

    if(typeof firstNum === "string" || typeof secondNum === "string"){
        return "ERROR";
    }

    if((firstNum < 0) || (secondNum < 0) || (isNaN(firstNum)) || (isNaN(secondNum))){
        return "ERROR";
    }

    if(firstNum > secondNum){
        let temp = secondNum;
        secondNum = firstNum;
        firstNum = temp;
    }

    for(let i = firstNum; i < secondNum+1; i++) {
        sumOfAll += i;
    }

    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
