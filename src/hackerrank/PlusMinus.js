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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let p=0, n=0, z=0, pSum=0, nSum=0, zSum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
            pSum++;
        }
        if(arr[i] < 0){
            nSum++;
        }
        if(arr[i] == 0){
            zSum++;
        }
    }
    console.log(pSum/arr.length + "\n" + nSum/arr.length + "\n" + zSum/arr.length)

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
