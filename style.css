/* COUNTER */

const counter = document.querySelector(".counter");

let start = 0;
let target = Number(counter.dataset.target);

function updateCounter(){

  if(start < target){

    start += 100;

    counter.textContent = start;

    setTimeout(updateCounter,20);

  }else{

    counter.textContent = target + "+";

  }

}

updateCounter();


/* ANIMASI SCROLL */

const fadeElements = document.querySelectorAll(".fade-up");

function reveal(){

  fadeElements.forEach(element=>{

    const posisi = element.getBoundingClientRect().top;

    const tinggiLayar = window.innerHeight;

    if(posisi < tinggiLayar - 100){

      element.classList.add("show");

    }

  });

}

window.addEventListener("scroll",reveal);

reveal();
