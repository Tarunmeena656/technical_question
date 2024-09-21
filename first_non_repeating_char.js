// Write a program for return first non repeating character

let charObject= {}
function firstNonRepeatChar(str){
    for( let char of str ){
        charObject[char] = (charObject[char] || 0) + 1;
    }

    // check first non repeating character
    for( let char of str){
        if( charObject[char] === 1){
            return char;
        }
    }
    //return null if not found any character that not repeat
    return null;
}

let str = 'hhello';
console.log("First non repeating character:", firstNonRepeatChar(str))