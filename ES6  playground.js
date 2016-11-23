/**
 * Created by conor on 11/22/16.
 */

"use strict";

/*
Arrow functions
 */
function circleArea(r) {
    let PI = 3.14;
    return PI * r * r;
}



let circleA2 = (r) => {
    const PI = 3.14;
    return PI * r * r;
};



let circleA3 = r => 3.14 * r * r;

console.log(circleArea(7));
console.log(circleA2(7));
console.log(circleA3(7));

/*
Template Literals
 */


let name = "Conor";

console.log("This guy is a cool person " + name + " Budge");

// ${foo} will input where ever it is placed use tildas `` instead of quotes
console.log(`My favorite person is ${name}`);


/*
Classes in ES6
 */

class Person {

    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName(){
        console.log(this.name);
    }

    displayAge(){
        console.log(this.age);
    }

    displayWeight() {
        console.log(this.weight);
    }
}

let conor = new Person("Conor", 32, 150);
let jess = new Person("Jess", 35, 130);

conor.displayWeight();
jess.displayWeight();

console.log("--------------------");

/*
Inheritance
 */

class Programmer extends Person {

    constructor(name, age, weight, language) {
        super(name, age, weight);
        this.language = language;
    }

    displayLanguage() {
        console.log(this.language);
    }

}

let bill = new Programmer("Bill", 60, 230, 'Javascript');

bill.displayWeight();
bill.displayAge();
bill.displayName();
bill.displayLanguage();


