const checkbox = document.querySelector('#checkbox');
const home = document.querySelector('#dark');
const h1 = document.querySelector('#h1')
const topDark = document.querySelectorAll('.card');
const bottomDark = document.querySelectorAll('.card2');
const counter = document.querySelectorAll('.counter');


checkbox.addEventListener('change', ()=>{
document.body.classList.toggle('dark');
home.classList.toggle('dark');
h1.classList.toggle('dark');

for(let i=0; i<topDark.length; i++){
topDark[i].classList.toggle('dark');

};

for(let j=0; j<bottomDark.length; j++){
    bottomDark[j].classList.toggle('dark');
};

});

counter.forEach((counter) =>{
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target/200;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
    }

    updateCounter();
})