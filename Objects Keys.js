/**
 * Created by conor on 8/15/16.
 */


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);

    arr = collection.filter(function (obj) {
        for(var i = 0; i < keys.length; i++) {
            console.log(keys[i], source[keys[i]]);
            if (!obj.hasOwnProperty(keys[i])) {
                return false;
            } else if (obj[keys[i]] != source[keys[i]]) {
                return false;
            }
        }
        return true;
    });



    // Only change code above this line
    return arr;
}


console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));