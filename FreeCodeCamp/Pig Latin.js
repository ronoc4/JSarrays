/**
 * Created by conor on 8/16/16.
 */



function translatePigLatin(str) {
    var pigLatin = '';
    //Kept unused var for testing
    var first = str.substr(1);
    var vowel = /[aeiou]/gi;
    if(str[0].match(vowel)) {
        return str += "way";
    }
    else {
        var index = str.indexOf(str.match(vowel)[0]);

        pigLatin = str.substr(index) + str.substr(0, index) + "ay";
    }

    return pigLatin;
}

translatePigLatin("glove");