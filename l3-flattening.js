//exercise 7 flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((sum, current) => sum.concat(current)));