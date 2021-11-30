// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
// rl.once('line', () => {
//     rl.on('line', readLine);
// });


while (true) {
    // Generate the list and pass it like readLine wants it
    const arrSize = Math.floor(Math.random() * 3) + 2
    // console.log('arrSize is ', arrSize)
    let i = 0, testInput = []
    while (i <= arrSize) {
        testInput.push(Math.floor(Math.random() * 100))
        i++
    }
    
    // Call readLine
    readLine(testInput)
}
// readLine([0,0,87])


// function readLine (line) {
//     const arr = line.toString().split(' ').map(Number);

//     if (max(arr) != sortMax(arr)) {
//         console.log(max(arr));
//         console.log(sortMax(arr));
//     } else {
//         console.log('OK')
//     }
//     // process.exit();
// }
function readLine (arr) {
    // const arr = line.toString().split(' ').map(Number);
    console.log('start readLine')
    let maxResult = max(arr)
    if (maxResult != sortMax(arr)) {
        console.log('** RESULTS DIFFER **')
        console.log(max(arr));
        console.log(sortMax(arr));
    } else {
        // console.log('Results same')
        // console.log(arr)
        // console.log(maxResult)
        console.log('OK')
    }
    console.log('end readLine')
    // process.exit();
}

function max(arr) {
    // write your code here
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

// This has some edge case with double 0s
function sortMax(arr) {
    try {
        console.log('pre sort arr is ', arr)
        const clonedArr = [...arr]
        clonedArr.sort(function compareFn(a, b) { return a - b })
        console.log('clonedarr is ', clonedArr)
        const answer = clonedArr[clonedArr.length - 1] * clonedArr[clonedArr.length - 2]
        if (answer !== 0 && !answer) {console.log('answer is ', answer);throw new Error('answer is ', answer)}
        return answer
    } catch (err) {
        console.error('err is ', err)
        throw err
    }
}

module.exports = max;
