"use strict";
//https://www.hackerrank.com/challenges/compare-the-triplets/problem?h_r=next-challenge&h_v=zen
//fit add
// function compareTriplets(a, b) {
//     var alice = 0; var bob = 0
//     for (var i = 0; i < a.length; i++) {
//         if (a[i]>b[i]) {alice++}; if (b[i]>a[i]) {bob++}
//     }
//     return [alice,bob];
// }

//https://www.hackerrank.com/challenges/simple-array-sum/problem?h_r=profile
// Add an array to itself!
// function simpleArraySum(ar) {
//     var total = 0;
//     for (var i = 0; i < ar.length; i++) {
//         total += ar[i];
//     }
//     return total;

// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    var i = 1
    while (i<=n) {console.log(" ".repeat(n-i)+"#".repeat(i));i++}

}