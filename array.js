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






