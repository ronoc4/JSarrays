/**
 * Created by conor on 8/19/16.
 *
 *  2 different ways for the same problem
 */

function convertHTMLReg(str) {
    // &colon;&rpar;
    //var req = new RegExp("\\?&'<>\"", "g");

//USe regrex and replace method to convert character to HTML
    return str.replace(/&/gi, "&amp;").replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/"/gi, "&quot;").replace(/'/gi, "&apos;");

}

console.log(convertHTMLReg("Black & Tan < Fun > Not drinking with 'buddies' "));


function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    htmlEntities={
        '&':'&amp;',
        '<':'&lt;',
        '>':'&gt;',
        '\"':'&quot;',
        '\'':"&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str.split('').map(function(entity){
        return htmlEntities[entity] || entity;
    }).join('');
}

// test here
console.log(convertHTML("Dolce & Gabbana"));