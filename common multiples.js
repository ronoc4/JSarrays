/**
 * Created by conor on 9/1/16.
 */


function range(rangeArray) {
    var array = [];

    var high = rangeArray.reduce(function(a,b){
        return Math.max(a,b);
    });
    var low = rangeArray.reduce(function(a,b){
        return Math.min(a,b);
    });

    for(var i = low; i <= high; i++){
        array.push(i);
    }
    var x = true;
    var lcm = 0;
    //noprotect
    while(x) {
        lcm++;
        for(var j = array[0]; j <= array[array.length -1]; j++){
            if(lcm % j !== 0) {
                break;
            } else if (j == array[array.length - 1]){
                x = false;
            }
        }
    }

    return lcm;
}

console.log(range([23,18]));
