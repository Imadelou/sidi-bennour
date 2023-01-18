let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let sidi = document.querySelector('.sidi');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.bottom = value  + 'px';
    boat.style.right = value + 'px';
    mountains3.style.top= value / 3 + 'px';
    boat.style.top= value / 3 + 'px';
    mountains4.style.top= value / 2 + 'px';
    sidi.style.fontSize = value   + 'px';
    if(scrollY >=100 ){
        sidi.style.fontSize = 100 + 'px';
        sidi.style.position = 'fixed';
        if(scrollY >= 478 ){
            sidi.style.display = 'none';
        }else{
            sidi.style.display = 'block';
        }
    }
    if (scrollY >=1564) {
        if (!started) {
            container2.forEach((num1) => startCount(num1));
        }
        started = true;
      }
}

let container2 = document.querySelectorAll(".container2 .num1");
let section = document.querySelector(".wrapper");
let started = false;



function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 0.1 / goal);
}




const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');

ham.addEventListener('click'  , () => {

 ham.classList.toggle('is-active');
 menu.classList.toggle('is-open');
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click' , () => {
  ham.classList.remove('is-active');
 menu.classList.remove('is-open');
}))



  
let slideIndexa = [1,1,1,1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3","mySlides4","mySlides5","mySlides6","mySlides7","mySlides8"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);

function plusSlides(n, no) {
  showSlides(slideIndexa[no] += n, no);
}

function showSlides(n, no) {
  let m;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndexa[no] = 1}    
  if (n < 1) {slideIndexa[no] = x.length}
  for (m = 0; m < x.length; m++) {
     x[m].style.display = "none";  
  }
  x[slideIndexa[no]-1].style.display = "block";
}