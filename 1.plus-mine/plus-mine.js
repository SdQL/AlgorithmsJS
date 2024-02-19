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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const POSITIVE_NUMBERS = arr.filter(n => n > 0).length
    const NEGATIVE_NUMBERS = arr.filter(n => n < 0).length
    const ZERO_NUMBERS = arr.filter(n => n === 0).length
    const ARRAY_LENGTH = arr.length
    
    console.log((POSITIVE_NUMBERS / ARRAY_LENGTH).toFixed(6))
    console.log((NEGATIVE_NUMBERS / ARRAY_LENGTH).toFixed(6))
    console.log((ZERO_NUMBERS / ARRAY_LENGTH).toFixed(6))
    
    
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
