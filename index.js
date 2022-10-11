
// 1) header gnb mouseover

const gnb1depth_list = document.querySelectorAll('.gnb1depth > li:not(.blank)');

gnb1depth_list.forEach(gnb1depth => {
  gnb1depth.addEventListener('mouseover', e => {
    target = e.target;
    target.parentElement.classList.add('active');
  });
})


// gnb1depth_list.forEach(gnb1depth => {
//   gnb1depth.addEventListener('mouseout', e => {
//     target = e.target;
//     target.parentElement.classList.remove('active');
//   }); // mouseout 이 아니라, gnb2depth 벗어날때 active remove 해야 
// });

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
  if(currentSlide === (slide.length-1)){
    currentSlide = 0 ;
  }
},3000); 
