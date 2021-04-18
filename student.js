
const form = document.getElementById("form")
const firstname = document.getElementById("firstname")
const Lastname = document.getElementById("Lastname")
const password = document.getElementById("password")
const email = document.getElementById("email")
const zipcode = document.getElementById("zipcode")
const Country = document.getElementById("Country")
const state = document.getElementById("state")
const city = document.getElementById("city")
const Submit = document.getElementById("Submit")
const phoneNumber = document.getElementById(".phoneNumber")


form.addEventListener('Submit', (e) => {
    
        e.preventDefault()
        
});

form.addEventListener('Submit', value());

function value() {
    const stateValue = document.getElementById('state').value;
    console.log(stateValue.value);
}
let message = []

    if(password.value === ""|| password.value === null){
        message.push('shud enter password');

    }
    if(password.length > 6  || password.length < 6){
        message.push(' password length is incorrect');

    }

    if(password.length === 6 ){
        message.push('password length is correct');
    }
    if(password.value ===  'password' ){
        message.push(' password cant be password');
    }

     if(phoneNumber.value ===  '' ){
        console.log(+1 + "" + phoneNumber.value);
    }

    if(zipcode.length > 5 || zipcode.length < 5  ){
        message.push('zipcode length cant exceed 5');
    }

    if(message >0){
        e.preventDefault()
        errorElement.innerText = message.join(',')
    } 

