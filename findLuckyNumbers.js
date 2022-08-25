
// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// Write your code below this line.


const luckyNumbers = n =>{
  
    const uniqueNumbers = []
      
    while(uniqueNumbers.length < n)
    {
        let randomNumber = Math.floor(Math.random() * 10) +1;

        if(uniqueNumbers.indexOf(randomNumber) === -1)
        {
            uniqueNumbers.push(randomNumber)
        }
    }
    return uniqueNumbers
}

console.log(luckyNumbers(4))
console.log(luckyNumbers(6))
console.log(luckyNumbers(2))


