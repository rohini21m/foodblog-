
const form = document.getElementById(".form")
const firstname = document.getElementById(".firstname")
const  Lastname = document.getElementById(".Lastname")
const email = document.getElementById(".email-id")
const zipcode = document.getElementById(".zipcode")
const Country = document.getElementById(".Country")
const state = document.getElementById(".state")
const city = document.getElementById(".city")
const Submit = document.getElementById(".Submit")

const phoneNumber = document.getElementsById(".phoneNumber")


document.getElementById(".form").addEventListener('Submit', (e) => {
    e.preventDefault()
    let message = [];

    if (password.length <=6 || password.length >=10){
    message.Push("password length shud be checked");

}
if (password.length === 6){
    message.Push("password length is correct");
}

    if (zipcode.length === 5) {
        message.Push("password length is correct");
    }
    else (zipcode.length >= 5);{
    message.Push("incorrect zipcode");
}
if (phoneNumber.length >= 10) {
    message.Push("incorrect phoneNumber")

}
if (phoneNumber.length === 9) {
    console.log(+1 + ""+ phoneNumber.value);
}
console.log(password.value);
console.log(zipcode.value);
console.log(firstname.value);
console.log(Lastname.value);
console.log(Country.value);
console.log(state.value);
console.log(email-id.value);
});
