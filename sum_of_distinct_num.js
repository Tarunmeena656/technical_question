const array = [10, 15, 20, 30, 10, 15];
let Obj = {};

function sumOfDistinctNumber(array) {
  let sum = 0;

  for (let ele of array) {
    Obj[ele] = (Obj[ele] || 0) + 1;
  }
  for (let element of array) {
    if (Obj[element] === 1) {
      sum += element;
    }
  }
  return sum;
}

console.log(sumOfDistinctNumber(array));
