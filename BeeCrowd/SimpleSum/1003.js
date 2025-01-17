var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

const SOMA = A + B;

console.log('SOMA = ' + SOMA)