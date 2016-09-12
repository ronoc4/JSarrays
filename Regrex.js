/**
 * Created by conor on 8/25/16.
 */


function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    //Remove whitespace and underscores from string
    var newStr = /\s+|_/g;

    //Replace lower case letters at pos 1, 2 with uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
        
    //Split white space with dash
    return final = str.replace(newStr, '-').toLowerCase();
}

console.log(spinalCase('AllThe-small Things' + ' This_isAn other Example'));