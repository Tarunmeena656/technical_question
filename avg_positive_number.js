const array = [1, 2, 3, -4, -5, 6, 8, -5];

function avgPositiveNumber(array) {
  let sum = 0;
  let count = 0;
  let avg= 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 0) {
      sum += element;
      count++;
    }
  }
  avg = sum/count;
  return avg;
}

// avgPositiveNumber(array);
console.log("Average of all positive number in array ==>",avgPositiveNumber(array))