// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    const arrSize = arr.length
    let firstMaxIndex = -1, secondMaxIndex = -1
    for (let i = 0; i < arrSize; i++) {
        if (firstMaxIndex == -1 || arr[i] > arr[firstMaxIndex]) firstMaxIndex = i
    }
    for (let j = 0; j < arrSize; j++) {
        if (j != firstMaxIndex && (arr[j] > arr[secondMaxIndex] || secondMaxIndex == -1)) secondMaxIndex = j
    }
    return arr[firstMaxIndex] * arr[secondMaxIndex]
}

module.exports = max;
