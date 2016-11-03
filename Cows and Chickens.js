/**
 * Created by conor on 11/3/16.
 */

//First attempt
function printInventory(cows, chickens) {
    var cowString = String(cows);
    while(cowString.length < 3 ) {
        cowString = "0" + cowString;
    }
        console.log(cowString + " Cows");

    var chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
        console.log(chickenString + " Chickens");

}

printInventory(10, 7);


//Second better attempt
function animals(number, width) {
    var string = String(number);
    while (string.length < width)
        string = "0" + string;
    return string;

}

function printFarm(cows, chickens, ducks) {
    console.log(animals(cows, 3) + " Cows");
    console.log(animals(chickens, 3) + " Chickens");
    console.log(animals(ducks, 3) + " Ducks");
}

printFarm(10, 7, 3);
