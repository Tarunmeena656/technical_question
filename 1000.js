// 1. Write a function that takes a string and returns it reversed.

// function ReverseString(str){
//    return str.split('').reverse().join('')

// }
// let str = "Tarun sir"

// function stringReverse(str){
//   let revstr = "";
//   for(let s = str.length-1; s >= 0; s--){
//     console.log(str[s])
//     revstr += str[s]
//   }
//   return revstr;
// }

// console.log(stringReverse(str))

// // 2.Determine if a given string is a palindrome
// function stringPelindrom (str){
//   const reverse = str.split('').reverse().join('');
//   if(reverse === str){
//     console.log("String is pelindrom")
//   }else{
//     console.log('String is not pelindrom')
//   }
// }

// // 3. Find the maximum element in an array.

// // const array = [12,95,45,84];
// // let max = 0
// // function maxNumInArray(array){
// //    for( let i =0; i <= array.length; i++){
// //     if( max < array [i]){
// //         max = array[i]
// //     }
// // }
// // return max
// // }


// // 4.Calculate the sum of elements in an array.
// function sumOfArrayElement(array){
//     let sum = 0;
//    for( let i =1; i <array.length ; i++){
//     console.log("==", array[i])


//     sum += array[i]
//    }
//    return sum
// }

// console.log(sumOfArrayElement(array))
// console.log(maxNumInArray(array))
// stringPelindrom(str)
// console.log(ReverseString(str))


// function sum(){
//   console.log(arguments)
//   console.log(arguments.length)
// }
// sum(1,2,2)


// function uniqueArray(array){
// let uniqueArray = [];
// for( let arr of array){
//   console.log(arr)
//   if(!uniqueArray.includes(arr)){
//      uniqueArray.push(arr)
//   }
// }
// return uniqueArray;
// }

// function uniqueArray(array){
//   const uniqueArray =[];
//   for(let arr of array){
//     if(uniqueArray.indexOf(arr)== -1){
//       uniqueArray.push(arr)
//     }

//   }
//   return uniqueArray;
// }


// function uniqueArray(array){
//   return [...new Set(array)]
// }
// let array = [22,33,33,55,88,55,88];
// console.log(uniqueArray(array))

let array= [1, [2, [3, 4], 5], 6]

// function flattenArray(array){
//   return array.flat(Infinity)
// }
// console.log(flattenArray(array))

// function flattedArray(arr){
//   let result = [];
//   for( let a of arr){
//     if(Array.isArray(a)){
//       result = result.concat(flattedArray(a))
//     }else{
//       result.push(a)
//     }
//   }
//   return result;
// }


// console.log(flattedArray(array))

// function vowelInInclude( string){
//     let vowel = "aeiou";
//     for( let char of string){
//         if( vowel.includes(char)){
//             console.log("VOWEL FOUNDS",  char)
//         }
//     }
// }

// vowelInInclude("Tarun")

// function capitalize(sentence){
//     let str = ''
//     const splitSentence = sentence.split("");
//     for( let string of splitSentence){
//      str = str + string.charAt(0).toUpperCase();
//     }
//     return str;
// }

// console.log(capitalize("my name is tarun"))


function capitalize(sentence){
    return sentence.split("").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join();
}

console.log(capitalize("my name is taruun"))

function capitalize(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("my name is tarun")); // "My Name Is Tarun"

function uniqueElementArray(array){
    return [...new Set(array)]
}

console.log(uniqueElementArray([1,2,3,2,1]))