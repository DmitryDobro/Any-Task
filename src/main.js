import './style.scss';

function getАrticle(selectorName) {
  const arr = document.querySelectorAll(selectorName);
  let arrAtr = [];
  arr.forEach(item => {
    arrAtr.push(item.getAttribute('data-product-mini-card'));
  });
  return arrAtr;
}
let articles = getАrticle('._product');
console.log(articles);

// ==============

function getCharacteristics(selectorName, parametrName, parametrValue) {
  let characteristics = {};
  const list = document.querySelectorAll(selectorName);
  list.forEach(item => {
    let attributeName = item.querySelector(parametrName).childNodes[0].textContent.trim(); // так как в диве помимо просто названия характеристики есть еще элементы
    let value = item.querySelector(parametrValue).childNodes[0].textContent.trim(); //  свойство childNodes с индексом ноль, так как название характеристики всегда стоит в самом начале
    characteristics[attributeName] = value;
  });
  return characteristics;
}
const arrSelectors = ['.tab-pane-product-parameter-item', '.parameter-name', '.parameter-value'];
let obj = getCharacteristics(...arrSelectors);
console.log(obj);
