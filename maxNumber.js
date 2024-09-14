// How to check maximum number in Array 


// Case: 1 Without Javascript method 
// const number = [ 3,1,4,6,8,5,7,9,12,6,54]

// function findMax (array){
//     if( array.length == 0){
//         return null;
//     }
//     let maxValue = array[0];
//     for( let i =0; i < array.length; i++){
//         if(array[i] > maxValue){
//             maxValue = array[i];
//         }
//     }
//     return maxValue;
// }

// console.log(findMax(number))

// Case: 2 Using Javascript method 
const numbers = [ 3,1,4,6,8,5,7,9,12,6,54]

const maxNumber = Math.max(...numbers);
console.log(maxNumber)

// Thanks for watching
