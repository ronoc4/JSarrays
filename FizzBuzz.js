/**
 * Created by conor on 11/17/16.
 */

function fizzBuzz() {
    for (var i = 1; i < 100; i++) {
        if ( i % 3 == 0 && i % 5 == 0 ) {
            console.log("FizzBuz");
        }
        else if ( i % 3 == 0 ) {
            console.log("Fizz");
        }
        else if ( i % 5 == 0 ) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}

console.log(fizzBuzz());

function fizzBUzzTernary() {
    for( var i = 1; i < 100; i++) {
        var fizz = i % 3 == 0;
        var buzz = i % 5 == 0;

        console.log(fizz ? buzz? "FizzBuzz" : "Fizz" : buzz ? "Buzz" : i);
    }
}

console.log(fizzBUzzTernary());