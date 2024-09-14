// Remove duplicates
const array = [1,2,3,0,4,5,5,5,6,4,3,2];

// // 1.  method 
// let uniqueArray = new Set( array);
// console.log(uniqueArray)

// // 2.  Method

// let uniqueArray= []
// function removeDups(array){
//     for( let i = 0; i < array.length -1; i++){
//       if( uniqueArray.includes(array[i])){
//         continue
//       }
//       uniqueArray.push(array[i]);
//     }
// }

// removeDups(array);
// console.log("Unique array ", uniqueArray)

// 3. Method
let uniqueArray = []
function removeDuplicate(array){
    for( let i = 0; i < array.length -1; i++){
        let isDuplicate = false;
        for( let j =0 ; j < uniqueArray.length; j++){
            if( uniqueArray[j] === array[i]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            uniqueArray.push(array[i])
        }
    }
}

removeDuplicate(array);
console.log("Unique", uniqueArray)