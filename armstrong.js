// //Check Number is Armstrong or not 

// //Condition: 1 Using js method
// //Condition : 2 Without js method

// // Case: 1

// function Armstrong( num ){
//     const numStr = num.toString() // convert number to string
//     const numLength = numStr.length;
//     let sum = 0

//     for(let i =0 ; i < numStr.length ; i++){
//         sum += Math.pow(parseInt(numStr[i]), numLength);
//     }
//     if( sum === num){
//         console.log("Number is Armstrong")
//     }else{
//         console.log("Number is not Armstrong")
//     }
// }

// Armstrong(153)
// Armstrong(258)


// case: 2

function isArmstrong(num){
    const originalNum = num;
    let sum =0
    while(num > 0){
        let digit = num % 10 ;
        sum += Math.pow(digit, 3);
        num = Math.floor( num / 10);
    }

    if( sum === originalNum){
        console.log("Number is Armstrong")
    }else{
        console.log("Number is not Armstrong")
    }
}

isArmstrong(153)
isArmstrong(568)

// Thanks for watching