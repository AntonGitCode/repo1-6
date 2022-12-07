call_btn.addEventListener('click', function () {

    modal_title.textContent='Заказать звонок';  
    closebtn_position();
    if (!(modal.classList.contains('modal-aside-out') || modal.classList.contains('modal-aside-in'))) {
      modal.classList.add('modal-aside-in'); 
    }
    if (modal.classList.contains('modal-aside-out'))  { 
      modal.classList.remove('modal-aside-out');
      modal.classList.add('modal-aside-in'); 
    }
  
    for (let i=0; i<call_btns.length; i++) {
      let PNode = call_btns[i].parentNode; 
      if ((!(call_btns[i].type == "tel")))  { 
        PNode.classList.toggle('shut'); 
      }
    }
  
    if (screen_wrapper.classList.contains('shut')) {
      screen_wrapper.classList.toggle('shut');
    }
    if (window.innerWidth<1440)  {screen_wrapper.classList.add('z-index');}
});
  