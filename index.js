const gnb1depth_list = document.querySelectorAll('.gnb1depth > li:not(.blank) > a');

gnb1depth_list.forEach(gnb1depth => {
  gnb1depth.addEventListener('mouseover', e => {
    target = e.target;
    target.parentElement.classList.add('active');
  });
})


gnb1depth_list.forEach(gnb1depth => {
  gnb1depth.addEventListener('mouseout', e => {
    target = e.target;
    target.parentElement.classList.remove('active');
  });
});