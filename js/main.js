'use strict';

var avatars = ['01', '02', '03', '04', '05', '06', '07', '08'];
var titles = ['Заголовок1', 'Заголовок2', 'Заголовок3',
'Заголовок4', 'Заголовок5','Заголовок6', 'Заголовок7', 'Заголовок8'];
var types = [palace, flat, house, bungalo];
const price_min = 10000;
const price_max = 80000;
var rooms = [1, 2, 3, 4];
var guests = [1, 2, 3, 4, 5];
var checkin = ['12:00', '13:00', '14:00'];
var checkout = ['12:00', '13:00', '14:00'];
var features = ['wi-fi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var descriptions = ['Описание1', 'Описание2', 'Описание3',
'Описание4', 'Описание5', 'Описание6', 'Описание7', 'Описание8'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var OFFSET_X = 25;
var OFFSET_Y = 70;

// Получаем элементы с классом map__pin. Используем селектор.
var pins = document.querySelectorAll('.map__pin');

// Получаем элемент с идентификатором "housing-price". Используем селектор.
var housePriceField = document.querySelector('#housing-price');

// Добавляем элементу housePriceField класс hidden
housePriceField.classList.add('hidden');

// Удаляем класс hidden у элемента housePriceField
housePriceField.classList.remove('hidden');

// функция рандомного числа

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(1)); // expected output: 0


// рандомный элемент массива
var getRandomElement = function (array) {
  return array[getRandomInt(0, array.length)];
};

// генерирование объектов

var generatePinObjects = function () {
  for (var i = 0; i < 8; i++) {
    generatedPins.push({
      author: {
        avatar: 'img/avatars/user' + avatars[i] + '.png',
      },
      offer: {
        title: titles[i],
        address: locationX + ', ' + locationY,
        price: getRandomInt(price_min, price_max),
        type: types[i],
        rooms: getRandomInt(1, 4),
        guests: getRandomInt(1, 5),
        checkin: time[i],
        checkout: time[i],
        features: getRandomArray(features),
        description: descriptions[i],
            photos: getRandomArray(photos) /
          },
          location: {
            x: locationX,
            y: locationY
          }
        }
    );
  }
return generatePinObjects;
};


// отключаем неактивное состояние у страницы
var map = document.querySelector('.map');
map.classList.remove('map--faded');



// рендерим на страницу метки
var renderPins = function () {
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < generatedPins.length; j++) {
    var pinElement = pin.cloneNode(true);
    var currentPin = generatedPins[j];
    var pinImage = pinElement.querySelector('img');

    pinElement.style.top = currentPin.location.y + 'px';
    pinElement.style.left = currentPin.location.x + 'px';
    pinImage.alt = currentPin.offer.title + ' 0' + j;
    pinImage.src = currentPin.author.avatar;

    fragment.appendChild(pinElement);
  }
  mapPins.appendChild(fragment);
};
renderPins();
