import './style.scss';
import './scripts/clearCheckboxes';
import './scripts/dropDownList';

let input = document.getElementById('headerInput');
let btn = document.querySelector('.header__input-btn');
let icon = document.getElementById('headerClearIcon');

input.addEventListener('input', evt => {
  console.log(icon);

  if (input.value) {
    btn.style.display = 'block';
    icon.style.display = 'block';
  } else {
    btn.style.display = 'none';
    icon.style.display = 'none';
  }
});
icon.addEventListener('click', () => {
  input.value = '';
  btn.style.display = 'none';
  icon.style.display = 'none';
});
