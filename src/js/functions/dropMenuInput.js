const dropMenuInput = document.querySelector('.drop-menu');
const input = document.querySelector('.header__search-input')

input.addEventListener('focusin', ()=>{
    dropMenuInput.style.display = "block"
})
input.addEventListener('focusout', ()=>{
    dropMenuInput.style.display = "none"
})