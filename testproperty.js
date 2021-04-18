//testing properties for objects
var TakeMaya = {
    'gift': 'flowers',
    'City': 'SanAntonio',
    'girl': 'chandu',
};
function Meditate(checkProp) {
if (TakeMaya.hasOwnProperty(checkProp)) {
    return TakeMaya[checkProp];
} else {
    return "what rubbish";
}


}
console.log(Meditate('age'));
 // adding new objects and using this property.

const gift = {
    car: "benz",
    age: 12,
    colour: "black",
    model: "Q-7"
};
function go() {
    console.log("My birthday gift is ",this.car);
}
go();
