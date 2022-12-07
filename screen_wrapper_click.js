screen_wrapper.addEventListener('click', function (evt) {
  
    for (let i=0; i<call_btns.length; i++) {
      if (input_boxes[i].classList.contains('shut')){
        input_boxes[i].classList.remove('shut');
      }; 
    }
  
    if (window.innerWidth<1440) {
      if (screen_wrapper.classList.contains('z-index')) {
        modal.classList.remove('modal-aside-in');
        modal.classList.add('modal-aside-out');
        screen_wrapper.classList.remove('z-index');
      }
      else {
        if (aside_menu.classList.contains('aside-fade-in'))
        {
          aside_menu.classList.remove('aside-fade-in');
          aside_menu.classList.add('aside-fade-out');
        }  
        if (!modal.classList.contains('aside-fade-out'))
        {
          modal.classList.remove('modal-aside-in');
          modal.classList.add('modal-aside-out');
        }
        screen_wrapper.classList.add('shut');
      }
    }
    else {
      screen_wrapper.classList.toggle('shut');
  
      if (screen_wrapper.classList.contains('z-index')) {
        screen_wrapper.classList.remove('z-index')
      }
      modal.classList.remove('modal-aside-in');
      modal.classList.add('modal-aside-out');
    }
  });