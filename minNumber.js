// How to check minimum number in Array 


// Case: 1 Using Javascript method 
// const numbers = [ 3,1,4,6,8,5,7,9,12,6,54]
// const minNumber = Math.min( ...numbers );
// console.log("Minimum number ", minNumber)


// Case: 2 Without Javascript method 
const numbers = [ 3,1,4,6,8,5,0,9,12,6,54]

function findMinNumber(array){
    let minValue = array[0];
    for(let i =0; i < array.length; i++){
        if( array[i] < minValue ){
            minValue = array[i];
        }
    }
    return minValue;
}

console.log("Minimum Value ", findMinNumber(numbers));
// Thanks for watching
