var modalBtn = document.querySelector('.trail');
var modal = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var closeBtn = document.querySelector('.close-button');

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});
modal.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

closeBtn.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
   
})


