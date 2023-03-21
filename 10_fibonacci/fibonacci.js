const fibonacci = function(index) {

    let fibArray = [1,1];
    let pushArray = 0;

    if(index <= 0){
        return "OOPS"
    }

    if(index == 1 || index == 2){
        return 1;
    }

    for(let i = 2; i < index; i++){
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }

    return fibArray[index-1];

};

// Do not edit below this line
module.exports = fibonacci;
