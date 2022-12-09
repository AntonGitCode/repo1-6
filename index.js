  tabletMedia.addEventListener('change', event => {
    if (event.matches) {

      if (!modal_close_btn.classList.contains('inside')) {
        modal_close_btn.classList.add('inside');
        if (!modal.classList.contains('block')) {
          modal.classList.add('block');
        }
      }
      swiper = new Swiper('.swiper', {
            loop: false,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
      
    }      
    else {
      swiper[0].params.spaceBetween = 0;
      swiper[1].params.spaceBetween = 0;
      swiper.destroy;
    }
  });

padMedia.addEventListener('change', event => 
{ if (event.matches) { 
    if (modal_close_btn.classList.contains('inside')) {
      modal_close_btn.classList.remove('inside');
    }
  } 
});

deskMedia.addEventListener('change', event => { 
  if (event.matches) {  
    if (aside_menu.classList.contains('aside-fade-out')) {
      aside_menu.classList.remove('aside-fade-out');
    }
    if (aside_menu.classList.contains('aside-fade-in')) {
      aside_menu.classList.remove('aside-fade-in');
    }
    if (!screen_wrapper.classList.contains('shut') && (!modal.classList.contains('modal-aside-in'))) {
      screen_wrapper.classList.add('shut');
    }
    if (!screen_wrapper.classList.contains('z-index')) {
       screen_wrapper.classList.remove('z-index');
    }
  } 
});
