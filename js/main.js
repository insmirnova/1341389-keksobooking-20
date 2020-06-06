'use strict';

var avatars = ['01', '02', '03', '04', '05', '06', '07', '08'];
var titles = ['Заголовок1', 'Заголовок2', 'Заголовок3', 'Заголовок4', 'Заголовок5','Заголовок6', 'Заголовок7', 'Заголовок8'];
var types = [palace, flat, house, bungalo];
var price_min = 10000;
var price_max = 80000;
var rooms = [1, 2, 3, 4];
var guests = [1, 2, 3, 4, 5];
var checkin = ['12:00', '13:00', '14:00'];
var checkout = ['12:00', '13:00', '14:00'];
var features = ['wi-fi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var descriptions = ['Описание1', 'Описание2', 'Описание3', 'Описание4', 'Описание5', 'Описание6', 'Описание7', 'Описание8'];
var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg','http://o0.github.io/assets/images/tokyo/hotel2.jpg','http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

// функция рандомного числа

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

// функция создания массива строк случайной длины
var getRandomArray = function (array, newArray) {
  newArray = array.slice(0, getRandomNumber(0, array.length + 1));
  return newArray;
};

// генерирование объектов

var generatePinObjects = function () {
  for (var i = 0; i < 8; i++) {
    generatedPins.push({
      author: {
        avatar: 'src="{{author.avatar}}" alt="{{заголовок объявления}}"' + avatars[i] + '.png',
      },
      offer: {
        title: titles[i],
        address: 'locationX + ', ' + locationY',
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
};
generatePinObjects();

// отключаем неактивное состояние у страницы
var map = document.querySelector('.map');
map.classList.remove('map--faded');
