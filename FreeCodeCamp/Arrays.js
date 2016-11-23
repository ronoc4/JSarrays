/**
 * Created by conor on 5/13/16.
 */

var total = 0;

var numbers = [1,2,3,4,5,6];

for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

console.log("Total is: " + total);

function reducing() {
    var message = "";
    words = ["reducing", "is", "simple"];

    for (var j = 0; j < words.length; j++ ){
        message += words[j];
    }

    return words;
}

console.log("Reducing: " + reducing());




// The array method reduce is used to iterate through an array and condense it into one value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var array = [4,5,6,7,8];


singleVal = array.reduce(function(firstVal, curVal) {
    return firstVal + curVal;
}, 0);

console.log(" Reduce to single Value: " + singleVal);

//Array filter() method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function bigArray(val) {
    return val > 5;
}

var filtered = [1, 3, 5, 67, 32 , 23, 5, 2, 4 ].filter(bigArray);

console.log("Filtered Arrays ", filtered);


// Taken from the Mozilla dev page linked above
//Create JSON object
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

var invalidEntries = 0;

//typeof is a built in Javascript operator that will return a string to indicate the type of an object
function filterByID(obj) {
    if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
        return true;
    } else {
        invalidEntries++; //Count the number of elements removed
        return false;
    }
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 4


//sort() method on arrays

var arrayA = [1, 12, 21, 2];


function sortA(a, b) {
    return b - a; //This will return largest to smallest, changing to a - b will be smallest to largest sort.
}

console.log("Sort Array largest to smallest", arrayA.sort(sortA));

//concat() used to concatenate 2 arrays together into a single array

var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

newArray = oldArray.concat("Two arrays combined: ", concatMe);


//split() method to turn a string into an array

var string = "Split me into an array";

array = string.split(" ");

console.log(array);
