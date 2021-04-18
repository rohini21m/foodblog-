const Username = document.getElementById(".Username");
const Password = document.getElementById(".Password");
const form = document.getElementById(".form");
const errorElement = document.getElementById(".error");

form.addEventListener('submit',(e) => {
    let messages =[]
    if (Username.value ==='' || Username.value == null) {
        messages.push('Username should be filled');
    }
   // this would send errors if ant tab is not filled and make sure page wont get submited.
        if (Password.value <= 8) {
            messages.push('password is not long enough to 8 ');
        }
        if (Password.value ===password) {
            messages.push('password cant be password');
        }
        if (Password.value >= 10) {
            messages.push('password is longer than 10 ');
        }
        
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    } 
    })
