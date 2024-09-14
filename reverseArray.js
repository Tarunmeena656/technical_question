// How to reverse an array.



// Case: 1 Using Javascript method 
// const numbers = [ 1,2,3,4,5,6]
// console.log(numbers.reverse())

// Case: 2 Without Javascript method 
const numbers = [1,2,3,4,5,6]

function reverseArray(array){
    for( let i = 0, j = array.length -1; i < j; i++, j--){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log("Before reverse ", numbers)
console.log("After Reverse array ", reverseArray(numbers))








// Thanks for watching#
