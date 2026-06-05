const fadeElements = document.querySelectorAll('.fade-up');

function reveal(){

fadeElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight-100){
el.classList.add('show');
}

});

}

window.addEventListener('scroll',reveal);

reveal();
