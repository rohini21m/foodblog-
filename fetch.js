
var form = document.getElementById(".form")
var firstname = document.getElementsById(".firstname")
var Lastname = document.getElementsById(".Lastname")
var email = document.getElementsById(".email")
var zipcode = document.getElementsById(".zipcode")
var Country = document.getElementsById(".Country")
var state = document.getElementsById(".state")
var city = document.getElementsById(".city")
var submit = document.getElementsById(".Submit")

var phoneNumber= document.getElementsById(".phoneNumber")
form.addEventListener('Submit', (e) => {
    e.preventDefault()
    let message = [];
    if (password.length <== 6 || password.length >==10){
    message.Push("password length shud be checked");

}
if (password.length === 6){
    message.Push("password length is correct");
}

if (zipcode.length === 5){
    message.Push("password length is correct");
}
else (zipcode.length >== 5) {
    message.Push("incorrect zipcode");
}
if (phoneNumber.length >== 10) {
    message.Push("incorrect phoneNumber")

}
if (phoneNumber.length === 9) {
    console.log(+1 + phoneNumber.value);
}
console.log(password.value);
console.log(zipcode.value);
console.log(firstname.value);
console.log(Lastname.value);
console.log(Country.value);
console.log(state.value);
console.log(email.value);
});
