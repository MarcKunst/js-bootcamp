// exercise 1 looping a triangle
let brick = "#";
console.log(brick);
for (let counter = 0; counter <= 7; counter++) {
    brick = brick + "#" ;
    console.log(brick);
}

//exercise 2 FizzBuzz
for (number = 1; number <= 100; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz");
        number++;
    } else if (number % 3 == 0) {
        console.log("Fizz");
        number++;
    } else if (number % 5 == 0) {
        console.log("Buzz");
        number++;
    }
    console.log(number);
}

//exercise 3 Chessboard
let odd = " " + "#" + " " + "#" + " " + "#" + " " + "#";
let even = "#" + " " + "#" + " " + "#" + " " + "#" + " ";

for (lineLength = 0; lineLength < 8 ; lineLength++) {
    if (lineLength % 2 == 0) {
        console.log(odd);
    } else {
        console.log(even);
    }

}

//exercise 4 Minimun
function min(a, b) {
    return Math.min(a, b);
}

console.log(min(112, 45));

//exercise 5 Bean Counting
function countString(string, char) {
    let count = 0;
    for (let item = 0; item < string.length; item++) {
        if (string[item] == char) {
            count = count + 1;
        }
    }
    return count;
}

function countBs(string) {
    return countString(string, "B");
}

console.log(countBs("BBC"));
console.log(countString("kakkerlak", "k"));

//exercise 6 The sum of a range
function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
            array.push(i);
        }
    return array
}

console.log(range(1, 10));

function sum(array) {
    total = 0
    for (let value of array){
        total += value;
    }
    return total
}

console.log(sum(range(1, 10)));

//exercise 7 flattening
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((sum, current) => sum.concat(current)));

//exercise 8 A vector type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
//   // Method
//   plus(a, b) {
//     let plusX = a.x + b.x;
//     let plusY = a.y - b.y;

//     return (plusX, plusY);
// }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y); 
  }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

