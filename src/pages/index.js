import './index.css';

import {
  editButton,
  addButton,
  editUserForm,
  addImageForm,
  careerInput,
  nameInput
} from '../scripts/utils/constants.js';

import { initialCards } from '../scripts/utils/constants.js';
import { validationConfig } from '../scripts/utils/constants.js';

import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Card from '../scripts/components/Card.js';

function addContentUserPopup(data) {
  nameInput.value = data.name;
  careerInput.value = data.career;
}

function createCard(data, instance, containerSelector) {
  const instanceCard = new Card({
    data: data,
    handleCardClick: () => {
      instance.open(data);
      instance.setEventListeners();
    }}, containerSelector);
    return instanceCard.generateCard();
}

const formAddValidator = new FormValidator(validationConfig, addImageForm);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(validationConfig, editUserForm);
formEditValidator.enableValidation();

const userInfo = new UserInfo('.user-info__name', '.user-info__career');

const imagePopup = new PopupWithImage('.popup_type_show-image');
imagePopup.setEventListeners();

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createCard(item, imagePopup, '.cards__container');
    cardList.insertElementAppend(card);
  }
}, '.cards');

cardList.renderElements();

const userPopup = new PopupWithForm({
  popupSelector: '.popup_type_user-info',
  handleFormSubmit: (inputValues) => {
    userInfo.setUserInfo(inputValues);
    userPopup.close();
  },
  handleFormReset: () => {
    formEditValidator.clearForm();
  }
});
userPopup.setEventListeners();

function editButtonClickHandler() {
  addContentUserPopup(userInfo.getUserInfo());
  userPopup.open(); 
  formEditValidator.changeButtonState();
}

editButton.addEventListener('click', editButtonClickHandler);

const addImagePopup = new PopupWithForm({
  popupSelector: '.popup_type_add-image',
  handleFormReset: () => {
    formAddValidator.clearForm();
  },
  handleFormSubmit: (inputValues) => {
    addImagePopup.close();
    addImagePopup.resetForm();
    const card = createCard(inputValues, imagePopup, '.cards__container');
    cardList.insertElementPrepend(card);
  }});
addImagePopup.setEventListeners();

function addButtonClickHandler() {
  addImagePopup.open();
  formAddValidator.changeButtonState();
}

addButton.addEventListener('click', addButtonClickHandler);
