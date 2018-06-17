// Experiments:
// Code as below, but comment out var n = 1;
// Code as below, but comment out var n = 2; 
// Code as below, but comment out both var n = 1;and var n = 2;
 
var n = 1;

function print() {
    console.log("print():1:",n);
    var n = 2;
    n++;
    console.log("print():2:",n);
}

console.log("inline 1: ", n);
print();
console.log("inline 2: ", n);