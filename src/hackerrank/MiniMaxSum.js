'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let max = arr[0], min = arr[0], minSum=0, maxSum=0, maxIndex=0, minIndex=0;
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            if(arr[i] > max){
                max = arr[i]
            }
            if(arr[i+1] < min){
                min = arr[i+1]
            }
        } else {
            if(arr[i+1] > max){
                max = arr[i+1]
            }
            if(arr[i] < min){
                min = arr[i]
            }
        }
    }
    for(let j=0; j<arr.length; j++){
        if(arr[j]==max){
            maxIndex = j
        }
        if(arr[j]==min){
            minIndex = j
        }
    }
    for(let j=0; j<arr.length; j++){
        if(j!=maxIndex){
            minSum = minSum + arr[j]
        }
        if(j!=minIndex){
            maxSum = maxSum + arr[j]
        }
    }
    console.log(minSum + " " + maxSum)
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
