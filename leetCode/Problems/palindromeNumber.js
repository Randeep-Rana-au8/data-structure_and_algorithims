// Given an integer x, return true if x is a palindrome, and false otherwise

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('')
};

console.log(isPalindrome(121)) // output = true