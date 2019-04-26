// chessboard
let grid = 20;
let odd = " ";
let even = "#";
let chessboard = odd;

for (column = 0; column < grid ; column++) {
    for (row = 0; row < grid ; row++) {
        if ((column + row) % 2 == 0) {
            chessboard += odd;
        } else {
            chessboard += even;
        }
    }
    chessboard += "\n";
}

console.log(chessboard);
