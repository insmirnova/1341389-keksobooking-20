'use strict';


var types = [palace, flat, house, bungalo];
var min_value = 10000;
var max_value = 80000;
var rooms = [1, 2, 3, 4];
var guests = [1, 2, 3, 4, 5];
var time_checkin = ['12:00', '13:00', '14:00'];
var time_checkout = ['12:00', '13:00', '14:00'];

var features = [
  'wi-fi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

var photos = [
'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

var max_y = 630;
var min_y = 130;

var pin_width = 50;
var pin_height = 70;

var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');
var mapPins = document.querySelector('.map__pins');
var mapWidth = document.querySelector('.map__pins').offsetWidth;
var pinFragment = document.createDocumentFragment();



// функция рандомного числа

function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//console.log(getRandomNumber(1)); // expected output: 0

// рандомный элемент массива
var getRandomElement = function (array) {
  return array[getRandomNumber(0, array.length)];
};

// генерирование объектов

var generateData = function (i) {
  var locationY = getRandomNumb(min_y, max_y);
  var locationX = getRandomNumb(0, mapWidth);

  var ads = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png',
      },
      offer: {
        title: 'Заголовок' + (i + 1),
        address: locationX + ', ' + locationY,
        price: getRandomNumber(min_value, max_value),
        type: types[getRandomElement(types.length)],
        rooms: getRandomNumber(1, 4),
        guests: getRandomNumber(1, 5),
        checkin: time_checkin[getRandomElement(time_checkin.length)],
        checkout: time_checkout[getRandomElement(time_checkout.length)],
        features: features[getRandomElement(features.length)],
        description: 'Описание' + (i + 1),
        photos: photos[getRandomElement(photos.length)],
          },
          location: {
            x: locationX,
            y: locationY
          }
        }
    );
  }
  //return ads;
};


// отключаем неактивное состояние у страницы
var map = document.querySelector('.map');
map.classList.remove('map--faded');



// рендерим на страницу метки
var renderPin = function (data) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.querySelector('img').src = data.author.avatar;
  pinElement.querySelector('img').alt = data.offer.title;
  pinElement.style.left = data.location.x - pin_width / 2 + 'px';
  pinElement.style.top = data.location.y - pin_height + 'px';

  return pinElement;
};

var generateObject = function () {
  for (var i = 0; i < arrObject.length; i++) {
    pinFragment.appendChild(renderPin(arrObject[i]));
  }
};
generateObject();

mapPins.appendChild(pinFragment);
