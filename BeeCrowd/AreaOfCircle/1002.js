var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const n = 3.14159;
const r = Math.pow(lines[0], 2); // r raised to 2

const area = n * r;
const fixedArea = area.toFixed(4)

console.log('A=' + fixedArea);
