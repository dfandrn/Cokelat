const counter = document.querySelector(".counter");

let start = 0;
let target = Number(counter.dataset.target);

function updateCounter(){
  if(start < target){
    start += 100;
    counter.textContent = start;
    setTimeout(updateCounter, 20);
  }else{
    counter.textContent = target + "+";
  }
}

updateCounter();
