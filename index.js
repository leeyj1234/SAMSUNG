
// 1) header gnb mouseover

const gnb1depth_list = document.querySelectorAll('.gnb1depth > li:not(.blank)');
gnb1depth_list.forEach(gnb1depth => {
  gnb1depth.addEventListener('mouseenter', e => {
    target = e.target;
    target.classList.add('active');
  });
  
  gnb1depth.addEventListener('mouseleave', e => {
    target = e.target;
    target.classList.remove('active');
  });
});

// 2) carousel slider 

const  mainSlider = document.querySelector('.carousel-container');
const mainSlides = document.querySelector('#carousel'); 
const mainSlide = document.querySelectorAll(".slide"); 

let currentSlide = 0 ; 

setInterval(function(){
  let from = -(1910 * currentSlide); 
  let to = from - 1910; 
  mainSlides.animate( {
    marginLeft : [from + "px", to+ "px"]
  },{
    duration : 2000,
    easing : "linear",
    iteration : 1, 
    fill : "both"
  });
  currentSlide ++; 
  if(currentSlide === (mainSlide.length-1)){
    currentSlide = 0 ;
  }
},4000); 
