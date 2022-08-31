

// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

// For example:

// isPalindrom("a")
// // returns true

// isPalindrom("noon")
// // returns true


// Code here

function isPalindrome(word) {
    let j = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      if (word[i] !== word[j]) {
        return false
      }
      j--
    }
    return true
  }


console.log(isPalindrome('noon'));
console.log(isPalindrome('night'));