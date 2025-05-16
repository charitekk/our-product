let slides=document.querySelectorAll(".slide");

let currentTime=0;

function  showSlides(index){
    slides.forEach((slide,i)=>{
        slide.classList.remove("active");
        if( i ===index) slide.classList.add("active");

    });
}

function nextSlide(){
    currentTime=(currentTime +1) %slides.length;
    showSlides(currentTime);
 }

 showSlides(currentTime);
 setInterval(nextSlide,3000);


//  ======slider 2=========//


let slides1=document.querySelectorAll(".slide1");
let currentIndex=0;


function showSlides1(index1){
    slides1.forEach((slide1,x)=>{
        slide1.classList.remove("active");
        if( x === index1) slide1.classList.add("active");
    });
};


function nextSlide1(){
    currentIndex=(currentIndex+1)%slides1.length;
    showSlides1(currentIndex);
}

showSlides1(currentIndex);

setInterval(nextSlide1,3000);


// ======slide2======//

let slides2=document.querySelectorAll(".slide2");

let currentIndex2=0;

function showSlides2(index2){
    slides2.forEach((slide2,y)=>{
        slide2.classList.remove("active");
        if( y === index2)slide2.classList.add("active");
    });
}

function nextSlide2(){
    currentIndex2=(currentIndex2 +1) % slides2.length;
    showSlides2(currentIndex2);
}
showSlides2(currentIndex2);


setInterval(nextSlide2,3000);