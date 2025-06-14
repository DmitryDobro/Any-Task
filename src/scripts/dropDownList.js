let catArr = document.querySelectorAll('.category__name');

for (let i = 0; catArr.length > i; i++) {
  catArr[i].addEventListener('click', evt => {
    console.log(catArr[i].parentNode.querySelector('.subcategory__list'));

    let subCat = catArr[i].parentNode.querySelector('.subcategory__list');
    subCat.classList.toggle('subcategory_type_active');
    catArr[i].classList.toggle('category_type_active');
  });
}
