// Mutation of arrays
const arr1 = ["pink", "white", "yellow", "green"];
let arr2;
(function () {
    arr2 = [... arr1];
    arr1[3] = "plum"
})();
console.log(arr1);
console.log(arr2);


// using distructing array to use variables of an array.

var dim = { v: 65, u: 90, z: 10 };
var v = dim.v;
var u = dim.u;
var z = dim.z;
console.log(v, u, z);
const { v: q, u: y, z: o } = dim;  // this line mean get "v" from dim and assign that value to "q".
console.log(q, y, o); 


const WEATHER = {
    today : 56,
    get tomorrow(){
        return this.today + 90;
    }
};
function Avg() {
    "use strict";
    const { tomorrow : total } = WEATHER;
    return total;
}
 
console.log(Avg());
    
