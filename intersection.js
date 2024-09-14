const a1 = [2, 3, 4, 5, 33, 44];
const a2 = [1, 2, 3, 4, 5];

let common = [];

function intersection(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    if (a2.includes(a1[i])) {
      common.push(a1[i]);
    }
  }
}

intersection(a1, a2);
console.log(common); // Output: [2, 3, 4, 5]
