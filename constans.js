const tabletMedia = window.matchMedia('screen and (max-width: 768px)');
const padMedia = window.matchMedia('screen and (min-width: 768px) and (max-width: 1440px)'); 
const deskMedia = window.matchMedia('screen and (min-width: 1440px)');
const aside_menu = document.querySelector('.aside');

const aside_open_btn = document.querySelector('.menu-burger');
const aside_close_btn = document.querySelector('.header__burger');
const screen_wrapper = document.querySelector('.screen-wrapper');
const chat_btn = document.querySelector('.chat-btn');


const modal = document.querySelector('.modal-aside');

 
const modal_close_btn = document.querySelector('.modal-close-btn');

const call_btn = document.querySelector('.call-btn');
const call_btns = document.querySelectorAll('.input-box__item');
const input_boxes = document.querySelectorAll('.input-box');
const modal_title = document.querySelector('.form-title');
const menu_header = document.querySelectorAll('.menu-container__item > img');
const chat_btn_pad = document.querySelector('.chat');
const cards = document.querySelectorAll('.card');

const btn_swap = document.querySelector('.btn-swap');
const call_btn_pad = document.querySelector('.call');

let numHidden =  3;