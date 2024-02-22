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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
function countDuplicates(numbers) {
    const countMap = {};
    const duplicatesMap = {};
    numbers.forEach(number => {
        countMap[number] = (countMap[number] || 0) + 1;
        if (countMap[number] > 1) {
            duplicatesMap[number] = countMap[number];
        }
    });
    
    return duplicatesMap;
}

function sockMerchant(n, ar) {
    // Write your code here
    const duplicates = countDuplicates(ar)
    let pairsCount = 0
    
    for(let num in duplicates) {
        pairsCount += Math.floor(duplicates[num] / 2)
    }
    
    return pairsCount

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
