let clearBtn = document.getElementById('clearBtn');
let checkboxes = document.querySelectorAll('.checkbox_brends-block');
let brendsBlockInput = document.getElementById('brendsBlockInput');

clearBtn.addEventListener('click', () => {
  let checkedCheckboxe = Array.from(checkboxes).find(checkbox => checkbox.checked);
  if (checkedCheckboxe || brendsBlockInput.value.trim()) {
    brendsBlockInput.value = '';
    checkboxes.forEach(checkbox => (checkbox.checked = false));
  }
});
