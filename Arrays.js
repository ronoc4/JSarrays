/**
 * Created by conor on 5/13/16.
 */

var total = 0;

var numbers = [1,2,3,4,5,6];

for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log(total);

var message = "";

var words = ["reducing", "is", "simple"];

for (var j = 0; j < words.length; j++ ){
    message += words[j];
}

console.log(message);




// The array method reduce is used to iterate through an array and condense it into one value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var array = [4,5,6,7,8];


singleVal = array.reduce(function(firstVal, curVal) {
    return firstVal + curVal;
}, 0);

console.log(singleVal);