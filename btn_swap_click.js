
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