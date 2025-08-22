"use strict";

// Put your code here! :)
function getFive() { return 5 }
function getTen() { return 10 }

function add(num1, num2) {
    return num1 + num2
}

function add2(func1, func2) {
    return add(func1(), func2())
}

function getNumber(num) {
    return function() {
        return num
    }
}

function addnWithIteration(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res = add2(getNumber(res), arr[i])
    }
    return res
}

function addnWithReduce(arr) {
    return arr.reduce((prev, curr) => {
            return add2(getNumber(prev), curr)
    }, 0)
    
}

function addnWithRecursion(arr) { 
        if (arr.length === 1)  {
            return arr[0]
        }
        return add2(arr[0], addnWithRecursion(arr.slice(1)))
    }

// console.log(addnWithIteration([getFive, getTen]))
// console.log(addnWithReduce([getFive, getTen]))
// console.log(addnWithRecursion([getFive, getTen]))

const vals = [7,4,8,0,10,7,3,2,5,9,12,6,4,1,7,8];

console.log(addnWithReduce(
    vals
    .filter(((val, i) => {
        return vals.slice(i + 1).indexOf(val) === -1
    }))
    .filter(val => val % 2 === 0)
    .map(val => getNumber(val))
    )
)
