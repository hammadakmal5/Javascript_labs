// Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true




// code here

const hasMoreVowels = word => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let vowelsNeeded = word.length / 2
    let wordSplit = word.toLowerCase().split('')
  
    for (let i = 0; i < wordSplit.length; i++) {
      let letter = wordSplit[i]
  
      if (vowels.includes(letter)) {
        vowelCount++
      }
  
      if (vowelCount > vowelsNeeded) {
        return true
      }
    }
  
    return false
  }
  
  console.log(hasMoreVowels('moose'))
  console.log(hasMoreVowels('Aal'))
  console.log(hasMoreVowels('yay'))
  console.log(hasMoreVowels('mice'))