'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomValue = function (inputValue) {

  for (var i = 0; i < inputValue.length; i++) {
    var length = inputValue.length;
    var randomValue = inputValue[Math.floor(Math.random() * (length - 0)) + 0];
  }

  return randomValue;
};

var getRandomName = function (name, surname) {

  var tempName = getRandomValue(name);
  var tempSurname = getRandomValue(surname);
  var wizardName = tempName + ' ' + tempSurname;
  return wizardName;

};

var getRandomColor = function (color) {

  color = getRandomValue(color);

  return color;
};

var createObjectWizard = function (name, surname, coat, eye) {

  var wizard = {};
  wizard.name = getRandomName(name, surname);
  wizard.coatColor = getRandomColor(coat);
  wizard.eyeColor = getRandomColor(eye);

  return wizard;
};

var createArrayWizards = function (countWizards, name, surname, coat, eye) {

  var wizards = [];
  for (var i = 0; i < countWizards; i++) {
    wizards.push(createObjectWizard(name, surname, coat, eye));
  }

  return wizards;
};

var wizards = createArrayWizards(4, names, surnames, coatColors, eyesColors);

var renderWizard = function (wizard) {

  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
