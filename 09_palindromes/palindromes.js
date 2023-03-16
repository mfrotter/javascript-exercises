const palindromes = function (palindrome) {

newPalindrome = palindrome.toLowerCase().replace(/[^a-z]/g,"");

    for(let i = 0; i < newPalindrome.length; i++){
        if(newPalindrome[i] != newPalindrome[newPalindrome.length - i - 1])
        return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
