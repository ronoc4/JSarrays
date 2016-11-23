/**
 * Created by conor on 11/18/16.
 */

function calcFibNumbers (max) {
    var arr = [0, 1];

    for(var i = 2; i < max; i++) {
        arr.push(arr[i -1] + arr[i - 2]);
    }
    return arr;
}

console.log(calcFibNumbers(10));