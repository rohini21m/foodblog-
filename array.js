var hisArray = [[34, "ioha"], ["odissa", 2367]];
var data = hisArray;
console.log(data);
var entry = [901, "ohio", 234];
console.log(entry[1]);
entry[1] = 455;
console.log(entry[1], entry);
var flowers = [["lilly", "rose", "tulips"], ["marygold", "lotus", "jasmine"], ["cactus", "lavender", 'hibiscus']];
gifts = flowers;
console.log(flowers[1][2]);
flowers.push(["chrysanthimums", "banthi"]);// push = adding new elements in array .
console.log(gifts);// 
var gifts = flowers.pop([2][1]);// pop useful to remove last items of array.
console.log(gifts);
var disney = ["elsa", "cindrella", "anna"];
var frozen = disney.shift();// shift is used to remove first item and show rest.
disney.unshift(["george"]);// unshift can be used to replace array element.
console.log(disney);




var arr = [
    'jyo', 'rose', 'lisa',23, true, [67, 65, 100], function(name)
    {
        return 'bye ' + name;
    }
];
console.log(arr[6](arr[1]));
console.log("hey guys Im " + arr[6](arr[2]) + 'MY AGE  IS '+ arr[5][1]);



var colors = ['white', 'blue', 'pink'];
colors[1 ]= 'red';
console.log(colors);
colors.push('violet');
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift('neon');
console.log(colors);
console.log(colors.indexOf('neon'));

if (colors.indexOf('blue') === -1) {  ////here indexof('blue')===-1 represents the value is not present in array.
    console.log(colors.push('beige') && colors.indexOf('beige'));

}








