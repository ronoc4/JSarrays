/**
 * Created by conor on 8/11/16.
 */


function convertToRoman(num) {
    var romanLetters = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    var roman = '';
    var i;

    for (i in romanLetters) {
        //Testing out for ...in loop
        console.log("obj." + i + ":" + romanLetters[i]);
        while (num >= romanLetters[i]) {
            roman += i;
            num -= romanLetters[i];
        }
    }

    return roman;
}

num = 36;
console.log((num + " converted to Roman Numeral is " + convertToRoman(num)));