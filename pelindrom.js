// Question:1 Create a number is pelindrom or not ?
// condition : With javascript method 
//           : without javascript method


// // Solution: 1 With javascript method

// let num = 1211;

// function isPelindrom( num ){
//     let num1 = num.toString();
//     let reversedNum = num1.split('').reverse().join('');
//     return num1 == reversedNum;
// }

// console.log("Number is pelindrom", isPelindrom(num))



// Solution: 2 Without javascript method

let num=1211;
let reversedNum = num;
let reverse = 0;
while( num > 0){
    let digit = num % 10 // get the last digit
    reverse = reverse * 10 + digit  // create a reverse number
    num = Math.floor( num / 10) // remove the last number 

}

if( reverse === reversedNum){
    console.log('Number is pelindrom')
} else{
    console.log("Number is not pelindrom")
}