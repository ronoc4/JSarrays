/**
 * Created by conor on 8/17/16.
 */

function fearNotLetter(str) {
    //Create alphabet string
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    str = str.toLowerCase();
    alphabet = alphabet.toLowerCase();
    //Split into array
    alphabet = alphabet.split("");
    str = str.split("");

    if(str[0] !== "a") {
        return undefined;
    }

    for(var i = 0; i < str.length; i++) {
        if(str[i] !== alphabet[i]) {
            return alphabet[i];
        }
    }

    return str;
}

console.log(fearNotLetter("Abce"));