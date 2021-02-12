function line(MyArr, letter) {
    MyArr.push(letter);// add new letter to array  and return length of array.
    return MyArr.shift();// delete first and return it .
    MyArr.pop();
 
   

}
var MyArr = ["a", "b", 'c', 'd', 'e'];
console.log("before :", JSON.stringify(MyArr));// JSON.stringify prints the given array with elements in it .
(line(MyArr, "f"));
console.log(JSON.stringify(MyArr));
console.log("first letter:", JSON.stringify(MyArr.shift()));
console.log("last letter:", JSON.stringify(MyArr.pop()));





console.log(JSON.stringify({ r:90, j:11})); // this line gives result  as { "r"= 90 ,"j":11}.
