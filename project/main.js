 

let slides = document.querySelectorAll(".slide");
let currentIndex = 0;


function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}



function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}





// Initialize first slide
showSlide(currentIndex);


// Change slide every 3 seconds
setInterval(nextSlide, 3000);




// ========slider 2==============//

let slides1=document.querySelectorAll('.slide1');
let currentTime=0;


function Sliders(input){
  slides1.forEach((slide,y)=>{
    slide.classList.remove('active');
    if( y=== input)slide.classList.add('active');
  });
}

function nextSlides(){
 currentTime=(currentTime +1)%slides1.length;
 
 Sliders(currentTime);
}

Sliders(currentTime);

setInterval(nextSlides,3000);


///==========================slider3=====================/

let slider2=document.querySelectorAll('.slides1');
let currentTime2=0;



function show(out){
  slider2.forEach((slider,n)=>{
    slider.classList.remove('active');
    if(n ===out)slider.classList.add('active');
  })
}

function next(){
  currentTime2=(currentTime2 +1) % slider2.length;
  show(currentTime2);
};

show(currentTime2);

setInterval(next,3000);