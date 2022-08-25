// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")
//  returns true
// hasUniqueChars("Moonday")
//  returns false
// Uppercase and lowercase letters should be considered separately:

// hasUniqueChars("Bob")
//  returns true


// Code Here

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }


console.log(hasUniqueChars('Monday'))