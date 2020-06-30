// write algorithm for palindrome.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
    
function palindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1]
    if(str[0] === str.slice(-1)) return palindrome(str.slice(1,-1));
    return false;
}

palindrome('tacocat')