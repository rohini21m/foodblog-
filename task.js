var JohnScore=80;
var Sam = 45;
var Pass = 51;
if (JohnScore>Pass) {
    console.log('John passed the exam.' + ' he scored '+ JohnScore +' in exam');
}
if (Sam < Pass) {
    console.log('Sam passed the exam.' + 'he scored ' +  Sam + ' in exam');
    
} else (Sam > Pass)
{
    console.log('Sam failed exam');
}



function No(name, age) { // name and age are called parameters. this way of defining functions are called function statements .
    console.log('My  name  is ' + name  + ' and Im ' + age  + '' + ' old.');

}
No('natalie', 33);/// natalie and 33 are arguments


add(2, 7);
function add(a, b) {   //// this an example of function statement.
    console.log(a + b);
}
sum(2, 7);


 var sum = function (a,b) {  // this is function expression .q
    console.log(a + b);
}
sum(2, 7);
 