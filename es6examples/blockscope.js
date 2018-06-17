let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = function () { return i * 2 }
}

// note the var declaration of the loop iterator
for (var j = callbacks.length; j < 5; j++) {
  callbacks[j] = function () { return j * 2 }
}

console.log( callbacks[0]() );// === 0
console.log( callbacks[1]() );// === 2
console.log( callbacks[2]() );// === 4
console.log( callbacks[3]() );// === 10
console.log( callbacks[4]() );// === 10