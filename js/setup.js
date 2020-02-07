'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктория', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Функция генерации случайных данных
function generateWizards() {
  var wizards = [];
  for (var i = 0; i < 4; i++) {
    var wizardName = getRandomName() + ' ' + getRandomSurname();
    var wizardCoatColor = getRandomCoatColor();
    var wizardEyeColor = getRandomEyeColor();

    wizards.push({
      name: wizardName,
      coatColor: wizardCoatColor,
      eyesColor: wizardEyeColor
    });
  }
  return wizards;
}

function getRandomName() {
  var randomName = Math.floor(Math.random() * WIZARD_NAMES.length);
  return WIZARD_NAMES[randomName];
}

function getRandomSurname() {
  var randomName = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  return WIZARD_SURNAMES[randomName];
}

function getRandomCoatColor() {
  var randomCoatColor = Math.floor(Math.random() * WIZARD_COATS_COLOR.length);
  return WIZARD_COATS_COLOR[randomCoatColor];
}

function getRandomEyeColor() {
  var randomEyeColor = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);
  return WIZARD_EYES_COLOR[randomEyeColor];
}

// Функция создания DOM-элемента на основе JS-объекта
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

// функция заполнения блока DOM-элементами на основе массива JS-объектов
var renderDom = function () {
  var wizards = generateWizards();
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderDom();
