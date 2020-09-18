const checkbox = document.querySelector('#checkbox');
const home = document.querySelector('#dark');
const h1 = document.querySelector('#h1')
let topDark = document.querySelectorAll('.card');
let bottomDark = document.querySelectorAll('.card2');

checkbox.addEventListener('change', ()=>{
document.body.classList.toggle('dark');
home.classList.toggle('dark');
h1.classList.toggle('dark');

for(let i=0; i<topDark.length; i++){
topDark[i].classList.toggle('dark');
console.log(topDark);
};

for(let j=0; j<bottomDark.length; j++){
    bottomDark[j].classList.toggle('dark');
};

});