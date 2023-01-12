// complete the given function

function palindrome(str){
    let start = 0;
    let end = str.length-1;
    str = str.toLowerCase();
    while(start<end){
        if(str.charAt(start) != str.charAt(end)){
            return false;
        }
    }
    return true;
}
module.exports = palindrome
