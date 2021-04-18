function cold() {
    "use strict";
    const MATH_CONSTANTS = {
        PI : 3.14,
    };

    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 100;

    }
    catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = cold();

///
var Vizag = (str1, str2) => str1+str2;

console.log(Vizag(["Cooking can be fun"],[" Munnangi"]));
