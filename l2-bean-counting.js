// bean counting
function checkString(string, character) {
    let counter = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === character) counter += 1;
    }
    return counter;
}

function countBs(string) {
    return checkString(string, "B");
}


console.log(countBs("BBC"));
console.log(checkString("kakkerlak", "k"));


