// The simplest form of this function, returns true if it is passed an even
// number. Note we do not need brackets for the argument, x, as there is only 
// one.
let even = x => x % 2 === 0;

console.log( "Is 1 even?", even(1) );
console.log( "Is 2 even?", even(2) );
console.log( "Is 3 even?", even(3) );
console.log( "Is 4 even?", even(4) );
console.log( "Is 5 even?", even(5) );

// This is another simple implementation of the add function to  add two 
// numbers together. Note brackets are used for the function arguments, as
// there are more than one.
let add = (x, y) => x + y;

console.log( add(1,2) );

// automatic returning of a new object. The brackets are used to avoid
// ambiguity. 
let getSomeObject = number => ({ id: number});
console.log(getSomeObject(45));


// A longer example where we want to display the word "even" when we pass in
// an even number, otherwise the number itself. We have also used an optional
// argument to specify the casing of the text displayed.
let evenOrNumber = ( n, uppercase = false ) => {
  if ( n % 2 == 0 ){
    return uppercase ? "EVEN" : "even";
  }
  return n;
};

for( let i = 1; i <= 100; i++){
  console.log( even( i ) );
}

// starter exercise: implement a subtract method.

// exercise:  using the native JavaScript method filter, in a single line of 
// code, get the unique values from an array. The filter method accepts a 
// function that is (optionally) passed the current element, it's index, and
// the complete array.

//var unique = a.filter( put your function here... );
//console.log( unique );

