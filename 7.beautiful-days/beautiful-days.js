'use strict';

const fs = require('fs');

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
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
    // Write your code here
    let counterOfDays = 0
    
    for(let day = i; day <= j; day++) {
        
        let reversedNum = reverseNumber(day)
        
        if((day - reversedNum) % k === 0) {
            counterOfDays++
        }
    }
    
    return counterOfDays
    
}

function reverseNumber(num) {
    let reversedString = num.toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedString);

    return reversedNum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const i = parseInt(firstMultipleInput[0], 10);

    const j = parseInt(firstMultipleInput[1], 10);

    const k = parseInt(firstMultipleInput[2], 10);

    const result = beautifulDays(i, j, k);

    ws.write(result + '\n');

    ws.end();
}
