import {modal_close_btn} from './slider'
import {modal} from './slider'

export function closebtn_position () {
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