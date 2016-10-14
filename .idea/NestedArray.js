/**
 * Created by conor on 10/14/16.
 */

function steamrollArray(arr) {
    //Empty array to store values
    var flatArray = [];

    var flat = function(arg) {
        //check to see if it is not array then push value
        if(!Array.isArray(arg)) {
            flatArray.push(arg);
        } else {
            for(var a in arg) {
                flat(arg[a]);
            }
        }
    };

    arr.forEach(flat);
    return flatArray;

}

var x = steamrollArray([1, [2], [3, [[4]]]]);

console.log(x);