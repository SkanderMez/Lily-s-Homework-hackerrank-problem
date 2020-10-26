

'use strict';

const fs = require('fs');

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



function swapNumberCompareToAscSort(arr){
    let sortedArr = [...arr];
    // asc sort for array
    sortedArr.sort(function(a, b){return a - b});
    // inizilize swap number to 0
    let swapNumber = 0;

    // a map with Array value as key and Array indexes as values
    var indexMap = new Map();
    for (let [index, value] of arr.entries()){
      indexMap.set(value,index);
     } 

    for (let [index, value] of arr.entries()) {
        
        let  sortedValue = sortedArr[index];
        let  currentSortedValueIndex = indexMap.get(sortedValue)

        if(index !== currentSortedValueIndex) {
            arr[currentSortedValueIndex] = value;
            arr[index] = sortedValue
            indexMap.set(value,currentSortedValueIndex)

            swapNumber ++
        }
    }
    return swapNumber
}

function swapNumberCompareToDescSort(arr){
    let sortedArr = [...arr];
    sortedArr.sort(function(a, b){return b-a});
    let swapNumber = 0;

    var indexMap = new Map();
    for (let [index, value] of arr.entries()){
      indexMap.set(value,index);
     } 

    for (let [index, value] of arr.entries()) {
        
        let  sortedValue = sortedArr[index];
        let  currentSortedValueIndex = indexMap.get(sortedValue)

        if(index !== currentSortedValueIndex) {
            arr[currentSortedValueIndex] = value;
            arr[index] = sortedValue
            indexMap.set(value,currentSortedValueIndex)

            swapNumber ++
        }
    }
    return swapNumber
}


// Complete the lilysHomework function below.
function lilysHomework(arr) {

let arr2 = [...arr];

let swapNumber = swapNumberCompareToDescSort(arr);
let swapNumber2 = swapNumberCompareToAscSort(arr2);

return swapNumber < swapNumber2 ? swapNumber:swapNumber2;

}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = lilysHomework(arr);

    ws.write(result + "\n");

    ws.end();
}

