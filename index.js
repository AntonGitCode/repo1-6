
const tabletMedia = window.matchMedia('screen and (max-width: 768px)');
const padMedia = window.matchMedia('screen and (min-width: 768px) and (max-width: 1440px)'); 
const deskMedia = window.matchMedia('screen and (min-width: 1440px)');
const aside_menu = document.querySelector('.aside');

const aside_open_btn = document.querySelector('.menu-burger');
const aside_close_btn = document.querySelector('.header__burger');
const screen_wrapper = document.querySelector('.screen-wrapper');
const chat_btn = document.querySelector('.chat-btn');

// export 
const modal = document.querySelector('.modal-aside');

// export 
const modal_close_btn = document.querySelector('.modal-close-btn');

const call_btn = document.querySelector('.call-btn');
const call_btns = document.querySelectorAll('.input-box__item');
const input_boxes = document.querySelectorAll('.input-box');
const modal_title = document.querySelector('.form-title');
const menu_header = document.querySelectorAll('.menu-container__item > img');
const chat_btn_pad = document.querySelector('.chat');
const cards = document.querySelectorAll('.card');

let numHidden =  3;
let isTablet = false;

// import {closebtn_position} from './closebtn_position'
function closebtn_position () {
  if (window.innerWidth<=768) {
    if (!modal_close_btn.classList.contains('inside')) {
      modal_close_btn.classList.add('inside');
      if (!modal.classList.contains('block')) {
        modal.classList.add('block');
      }
    }
  }
  else  {
    if (modal_close_btn.classList.contains('inside')) {
      modal_close_btn.classList.remove('inside');
    }
    if (modal.classList.contains('block')) {modal.classList.remove('block')}
  }
  }

  tabletMedia.addEventListener('change', event => {
    if (event.matches) {

      if (!modal_close_btn.classList.contains('inside')) {
        modal_close_btn.classList.add('inside');
        if (!modal.classList.contains('block')) {
          modal.classList.add('block');
        }
      }
      isTablet=true;
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
      swiper.destroy;
    }
  });

padMedia.addEventListener('change', event => 
{ if (event.matches) { 
    // closebtn_position ();


    isTablet=false;
    // if (screen_wrapper.classList.contains('z-index') && aside_menu.classList.contains('aside-fade-out')) { 
    //   screen_wrapper.classList.remove('z-index')
    // };
    numHidden = 5; 
    if (modal_close_btn.classList.contains('inside')) {
      modal_close_btn.classList.remove('inside');
    }
  
  } 
});

deskMedia.addEventListener('change', event => { 
  if (event.matches) { 
    numHidden = 3; 
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

const btn_swap = document.querySelector('.btn-swap');

btn_swap.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (btn_swap.textContent == 'Спрятать')  {

    const activeCards = document.querySelectorAll('.card:not(.shut)');
    const last_idx = activeCards.length - 1;

    for (let i = last_idx; i > last_idx - numHidden; i--) {
     
      activeCards[i].classList.add('card-fade-out');

      activeCards[i].addEventListener('animationend', function () {   
        this.classList.remove('card-fade-out'); 
        this.classList.add('shut');
        btn_swap.textContent='Показать все';
      });
      }
      this.classList.toggle('btn-rotate');
  }
  else {
    const hiddenCards = document.querySelectorAll('.card.shut');
    for (let hiddenCard of hiddenCards) {
      hiddenCard.classList.remove('shut');
    }
    btn_swap.textContent='Спрятать';
    this.classList.toggle('btn-rotate');
  }

});


chat_btn_pad.addEventListener('click', function () 
{   
  modal_title.textContent='Обратная связь';
  
    if (modal.classList.contains('modal-aside-out')) {
      modal.classList.remove('modal-aside-out');
      modal.classList.add('modal-aside-in'); 
    }
        
    if (!(modal.classList.contains('modal-aside-out') || modal.classList.contains('modal-aside-in'))) {
      modal.classList.add('modal-aside-in');
    }
    if (screen_wrapper.classList.contains('shut')) {
      screen_wrapper.classList.toggle('shut');
    }
    for (let i=0; i<call_btns.length; i++) 
    {
      if (input_boxes[i].classList.contains('shut')){
        input_boxes[i].classList.remove('shut');
      }
    }     
});  

const call_btn_pad = document.querySelector('.call');
call_btn_pad.addEventListener('click', function () 
{ 
  modal_title.textContent='Заказать звонок';
      
      if (modal.classList.contains('modal-aside-out')) {
        modal.classList.remove('modal-aside-out');
        modal.classList.add('modal-aside-in'); 
      }
        
      if (!(modal.classList.contains('modal-aside-out') || modal.classList.contains('modal-aside-in'))) {
        modal.classList.add('modal-aside-in');
      }
        
      if (screen_wrapper.classList.contains('shut')) {
        screen_wrapper.classList.toggle('shut');
      }
      for (let i=0; i<call_btns.length; i++) 
      {
       let PNode = call_btns[i].parentNode; 
       if ((!(call_btns[i].type == "tel")))  { 
        PNode.classList.toggle('shut'); 
       }
      }   
});  


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

chat_btn.addEventListener('click', function () {

  for (let i=0; i<call_btns.length; i++) {
    if (input_boxes[i].classList.contains('shut')) {
      input_boxes[i].classList.remove('shut');
    }
  } 
  
  modal_title.textContent='Обратная связь';
  closebtn_position();
  
  if (!(modal.classList.contains('modal-aside-out') || modal.classList.contains('modal-aside-in'))) {
    modal.classList.add('modal-aside-in'); 
  }
  if (modal.classList.contains('modal-aside-out'))  { 
    modal.classList.remove('modal-aside-out');
    modal.classList.add('modal-aside-in'); 
  }

  if (screen_wrapper.classList.contains('shut')) {
    screen_wrapper.classList.toggle('shut');
  }
  
  if (window.innerWidth<1440)  {screen_wrapper.classList.add('z-index');}
});

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

modal_close_btn.addEventListener ('click', function () {
  for (let i=0; i<call_btns.length; i++) 
  {
    if (input_boxes[i].classList.contains('shut')){
      input_boxes[i].classList.remove('shut');
    }; 
  }
  modal.classList.remove('modal-aside-in');
  modal.classList.add('modal-aside-out');

  if (aside_menu.classList.contains('aside-fade-in'))
  { 
    if (screen_wrapper.classList.contains('z-index')) { 
      screen_wrapper.classList.remove('z-index') 
    }
  }
  else  screen_wrapper.classList.toggle('shut');
});

