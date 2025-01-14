'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let spaces = n - 1
    let count = 1
    while(spaces >= 0 && count <= n) {
        console.log(" ".repeat(spaces) + "#".repeat(count))
        spaces -= 1
        count += 1
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
