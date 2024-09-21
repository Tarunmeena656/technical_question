const str = "hello";
let charObj = {};
function removeDuplicateChar(str) {
  let uniqueCharStr = "";
  for (let char of str) {
    charObj[char] = (charObj[char] | 0) + 1;
  }
  for (let char of str) {
    if (charObj[char] == 1) {
      uniqueCharStr += char;
    }
  }
  return uniqueCharStr;
}
console.log(removeDuplicateChar(str));
