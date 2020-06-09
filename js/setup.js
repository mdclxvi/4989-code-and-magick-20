'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var surnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomElement = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex];
};

var getRandomName = function (wizardNames, wizardSurnames) {

  var tempName = getRandomElement(wizardNames);
  var tempSurname = getRandomElement(wizardSurnames);
  var wizardName = tempName + ' ' + tempSurname;
  return wizardName;

};

var createArrayWizards = function (countWizard, wizardNames, wizardSurnames, coats, eyes) {

  var wizards = [];
  for (var i = 0; i < countWizard; i++) {
    var wizard = {
      name: getRandomName(wizardNames, wizardSurnames),
      coatColor: getRandomElement(coats),
      eyeColor: getRandomElement(eyes)
    };
    wizards.push(wizard);
  }

  return wizards;
};

var wizards = createArrayWizards(4, names, surnames, coatColors, eyesColors);

var renderWizard = function (template, wizard) {

  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizardTemplate, wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
