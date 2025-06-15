import './style.scss';

const arr = document.querySelectorAll('.card');
let arrAtr = [];
arr.forEach(item => {
  arrAtr.push(item.getAttribute('data-product-id'));
});

function addSymbol(arr) {
  return arr.map(item => {
    let result = '';
    item = '0' + item;
    for (let i = 0; i < item.length; i++) {
      if (i % 3 == 0 && i !== 0) {
        result += '-' + item[i];
      } else {
        result += item[i];
      }
    }
    return result;
  });
}
let a = addSymbol(arrAtr);

// ==============

const list = document.querySelectorAll('.li');
let obj = {};
list.forEach(item => {
  let attr = item.querySelector('.parameter-name').childNodes[0].textContent.trim();
  let value = item.querySelector('.parameter-value').childNodes[0].textContent.trim();
  obj[attr] = value;
});
console.log(obj);
