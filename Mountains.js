/**
 * Created by conor on 10/18/16.
 */

var landscape = function () {
  var result = "";

    var flat = function (size) {
        for(var i = 0; i < size; i++) {
            result += "_";
        }
    };

    var mountain = function (size) {
        result += "/";
        for(var i = 0; i < size; i++){
            result +="'";
        }
        result += "\\";
    };

    flat(5);
    mountain(2);
    flat(3);
    mountain(8);
    flat(2);
    mountain(5);
    flat(5);

    return result;
};

console.log(landscape());