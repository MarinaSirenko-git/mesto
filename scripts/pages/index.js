//импортировать константы
import {
  name,
  career,
  editButton,
  addButton,
  editUserForm,
  addImageForm,
  imageShowPopup,
  userInfoPopup,
  imageAddPopup,
} from '../utils/constants.js';

//импортировать данные для инициализации класса Card и класса FormValidator
import { initialCards } from '../utils/constants.js';
import { validationConfig } from '../utils/constants.js';

//импортировать отдельные ф-ии
import { addContentUserPopup } from '../utils/utils.js';
import { createCard } from '../utils/utils.js';

//импортировать классы
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//создать экземпляры класса
const formAddValidator = new FormValidator(validationConfig, addImageForm);
const formEditValidator = new FormValidator(validationConfig, editUserForm);
const userInfo = new UserInfo(name, career);
const popup = new PopupWithImage(imageShowPopup);

//через слой Section, создать экземпляр у класса Card, а внутри передаваемой ф-ии экземпляр PopupWithImage
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createCard(item, popup, '.cards__container');
    cardList.insertElementAppend(card.generateCard());
  }
}, '.cards');

//отрисовать на странице
cardList.renderElement();

//вынести создание экземпляра из ф-ии обработчика
const userPopup = new PopupWithForm({
  popupSelector: userInfoPopup,
  handleFormSubmit: (inputValues) => {
    userInfo.setUserInfo(inputValues);
    userPopup.closePopup();
  },
  handleFormReset: () => {
    formEditValidator.clearForm();
  }
});

//вынести инициализацию метода из ф-ии обработчика
userPopup.submitEventListener();

//обработчик
function editButtonClickHandler() {
  addContentUserPopup(userInfo.getUserInfo());
  userPopup.openPopup();
  userPopup.setEventListeners();
  formEditValidator.enableValidation();
  formEditValidator.inactiveButton();
}

//слушать событие
editButton.addEventListener('click', editButtonClickHandler);

const addImagePopup = new PopupWithForm({
  popupSelector: imageAddPopup,
  handleFormReset: () => {
    formAddValidator.clearForm();
  },
  handleFormSubmit: (inputValues) => {
    const card = createCard(inputValues, popup, '.cards__container');
      addImagePopup.closePopup();
      addImagePopup.resetForm();
      cardList.insertElementPrepend(card.generateCard());
  }});
addImagePopup.submitEventListener();

function addButtonClickHandler() {
    addImagePopup.openPopup();
    addImagePopup.setEventListeners();
    formAddValidator.enableValidation();
    formAddValidator.inactiveButton();
}

addButton.addEventListener('click', addButtonClickHandler);
