// Rotate array

let array = [1,2,3,4,5,6,7,8,9]

function rotateArray(array, k){
    return array.slice(-k).concat(array.slice(0, -k))
}

// rotateArray(array, 3)
console.log(rotateArray(array, 4))