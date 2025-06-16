import './style.scss';

function addSymbol(arr) { // функция для преобразования артикула в нужный нам вид с нулем в начале и с тире через каждые 3 числа
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

function getАrticle(selectorName, needTransform) {
  const arr = document.querySelectorAll(selectorName);
  let arrAtr = [];
  arr.forEach(item => {
    arrAtr.push(item.getAttribute('data-product-mini-card'));
  });
  if (needTransform) { 
    return addSymbol(arrAtr);
  } else {
    return arrAtr;
  }
}
let articles = getАrticle('._product', true);
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
