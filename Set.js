
//USING SLICE
const  arr = [1, 2, 3];
console.log(arr);
arr[3] = 56;
arr[1] = 34;
console.log(arr.slice(1)); // ans = [34,3,56]
console.log(arr.slice(1,3));//ans = [34,3]
console.log(arr.slice(3, 4));//ans = [56]

// Using slice, create newCar from myCar.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
let newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar));
console.log('newCar = ' + JSON.stringify(newCar));
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);


///  AND OBJECTS 

function a() {
    console.log('Namaste America');

}
a['prop'] = "namskhar";
a.object = {
    gtreet: 'Vanakkam'
};
a.myFunc = function(){
    console.log('chia Seeds');
}
a();


//creating objects 
let kid1 = {};
kid1.nickName = "chandu";
kid1.fullName = 'rohini Munanngi';
let kid2 = {};
kid2.nickName = "nandu";
kid2.fullName = 'Nandini Munanngi';
function createKids() {
    let newKid = {};
    newKid.nickName = "Sai";
    newKid.fullName = 'Kiran Reddy';
    return newKid;
   
}
function createKid(nickName,fullName) {
    let newKid = {};
    newKid.nickName = nickName;
    newKid.fullName = fullName;
    return newKid;
}
let kid3 = createKids();
let kid4 = createKid("paul","Paul Rudd");
console.log(kid1);
console.log(kid2);
console.log(kid3);
console.log(kid4);


//FUNCTION CONSTRUCTORS 
function Dish(type,Name) {
   
    this.type = type;
    this.Name = Name;
  
}

let lunch = new Dish("Vegan", "Pongal")
console.log(lunch);

/// object.create and different methods to create objects
function Person()
{
    
    this.name = 'karthik';
}
Person.prototype.City = 'maryland';
var person1 = new Person();
var person2 = Object.create(Person.prototype);
console.log(person1);
console.log(person2);


var detail = {
    Language:function() {
        return  'this  is  my mom' +  this.name;
    }
};

var pushpa = Object.create(detail, {
    name: {
        value: "pushpa"
    }

});

console.log(pushpa);



