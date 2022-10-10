// header


// footer
const BTN_FOOTER_HIDE = document.querySelector('.btn_inform');
const CONTENS_FOOTER_HIDE = document.querySelector('.hide_inform');

BTN_FOOTER_HIDE.addEventListener('click', () => {
    CONTENS_FOOTER_HIDE.classList.toggle('toggle_hide')
})