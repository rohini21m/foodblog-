var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var email= document.getElementById('email');
 var password =document.getElementById('password')
 var form = document.getElementById('form')
 var login = document.getElementByclass('submit')

 login.addEventListner('click', ()=>submit() )
 submit()
 {
     e.preventDefault();
     if(email.value==='' || email.value===null)
     {
         alert('invalid email');
     }
     if(password.length < 6 || password.length===null)
     {
         alert('invalid password');
     }
     if(password.length === 8 ){
         alert('valid password');
     }

    window.location.href="file:///C:/Users/Rohinimunnangi/Desktop/HTML%20AND%20CSS/help%20for%20better.html";

 }