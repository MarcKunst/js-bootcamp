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