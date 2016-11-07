/**
 * Created by conor on 11/3/16.
 *
 * http://eloquentjavascript.net/03_functions.html
 */

/*
 The previous chapter introduced the standard function Math.min that returns its smallest argument.
 We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
 */


function min(num1, num2) {
    return (num1 < num2) ? num1 : num2;
}

console.log(min(100, 10));

console.log(min(0, -10));

/*
 Recursion

 We’ve seen that % (the remainder operator) can be used to test
 whether a number is even or odd by using % 2 to check
 whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

 Define a recursive function isEven corresponding to this description.
 The function should accept a number parameter and return a Boolean.

 Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
 */


function isEven(num) {
    var number = Math.abs(num % 2 === 0);
    return number ? true : false ? isEven(number - 2) : false ;
}

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

console.log(isEven(-10002));

