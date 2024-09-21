// Check vowel counts in string

let string = "Hello";

function count_vowels(str){
    let vowels = 'aeiou';
    let count = 0;
    for( let char of str){
        if( vowels.includes(char)){
            count++;
        }
    }
return count;
}

console.log("Vowels count", count_vowels(string));