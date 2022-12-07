
aside_open_btn.addEventListener('click', function (evt) {
  
    if (aside_menu.classList.contains('aside-fade-out')) {
      aside_menu.classList.remove('aside-fade-out');
      aside_menu.classList.add('aside-fade-in');
      screen_wrapper.classList.toggle('shut');
    }
    if (!aside_menu.classList.contains('aside-fade-in') && !aside_menu.classList.contains('aside-fade-out')) {
      screen_wrapper.classList.toggle('shut');
      aside_menu.classList.add('aside-fade-in');
    }
  });
  
  aside_close_btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (aside_menu.classList.contains('aside-fade-in')) {
      aside_menu.classList.add('aside-fade-out');
      aside_menu.classList.remove('aside-fade-in');
      screen_wrapper.classList.toggle('shut');
    }
  });