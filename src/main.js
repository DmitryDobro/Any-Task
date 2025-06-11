import './style.scss';

let catArr = document.querySelectorAll('.category');

for (let i = 0; catArr.length > i; i++) {
  catArr[i].addEventListener('click', evt => {
    let subCat = catArr[i].querySelector('.subcategory');
    subCat.classList.toggle('subcategory_type_active');
  });
}
