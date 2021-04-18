var NumBetween0and10 = Math.floor(Math.random() * 10);

function RandomNumber() {
     

    return Math.floor(Math.random()*80);
}
console.log(RandomNumber());

function paris() {
    return parseInt("78690");
}
console.log(paris());

function check(a,b) {
    return a === b ? true :false;
}
console.log(check(7, 0));

function CheckSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" :  "zero";
}
console.log(CheckSign(0));



//let and var and const //

function lolly() {
    "using strict";
    let j = "himalaya  ";
    if (true) {
        let j = "everest "; /// var let j ="everest" this gives answer as everest .
        console.log("everest j :", j);

    }
    console.log("himalaya  j:", j);
    return j;


}
lolly();

//const example 
function spare(str) {
    "use strict";
    const SENTENCE = str + " Your a stunning women!!";
    for (let w = 0; w < str.length; w+=3){
        console.log(SENTENCE);
    }
 

}
spare("Maaya");

//const examples  mutate an array.

const h = [6, 9, 0, "i"];
function edit() {
    h[0] = 45;
    h[1] = 67;
    h[2] = 11;
    h[3] = "diana";
    return h;
}
console.log(edit());




