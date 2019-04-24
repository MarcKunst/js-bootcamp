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