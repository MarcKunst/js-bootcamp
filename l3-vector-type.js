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
  plus(nextVec) {
    return new Vec(this.x + nextVec.x, this.y + nextVec.y);
  }

  minus(nextVec) {
    return new Vec(this.x - nextVec.x, this.y - nextVec.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y); 
  }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);