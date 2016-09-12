/**
 * Created by conor on 9/1/16.
 */


function range(rangeArray) {
    var array = [];
    //Finds highest and lowest values in array
    var high = rangeArray.reduce(function(a,b){
        return Math.max(a,b);
    });
    var low = rangeArray.reduce(function(a,b){
        return Math.min(a,b);
    });
    //Loops through lowest and highest values to create array of range of values
    for(var i = low; i <= high; i++){
        array.push(i);
    }
    var x = true;
    var lcm = 0;


    //While loop to increment each iteration of lcm(lowest common multiple)
    while(x) {
        lcm++;
        for(var j = array[0]; j <= array[array.length -1]; j++){
            //Ends for loop if lcm is not 0
            if(lcm % j !== 0) {
                break;
                //when you reach end of array it has passed the lcm
            } else if (j == array[array.length - 1]){
                //break the while loop
                x = false;
            }
        }
    }

    return lcm;
}

console.log(range([23,18]));
