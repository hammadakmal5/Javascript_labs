// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.



// Starting array
let array = [1, 4, 11, 2, 37, -4];

// Write your solution below:

let min = array[0];
let max = array[0];

for (let i = 0; i < array.length; i++){
    
    if(array[i] < min){
        min = array[i];
    }
    if(array[i] > max){
        max = array[i];
    }
}
console.log(`Min: ${min}`);  // output: Min: -4
console.log(`Max: ${max}`); //  output: Max: 37