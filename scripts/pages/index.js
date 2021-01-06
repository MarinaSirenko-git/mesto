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
  careerInput,
  nameInput
} from '../utils/constants.js';

import { initialCards } from '../utils/constants.js';
import { validationConfig } from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Card from '../components/Card.js';

function addContentUserPopup(data) {
  nameInput.value = data.name;
  careerInput.value = data.career;
}

function createCard(data, instance, containerSelector) {
  const instanceCard = new Card({
    data: data,
    handleCardClick: () => {
      instance.openPopup(data);
      instance.setEventListeners();
    }}, containerSelector);
    return instanceCard.generateCard();
}

const formAddValidator = new FormValidator(validationConfig, addImageForm);
const formEditValidator = new FormValidator(validationConfig, editUserForm);
const userInfo = new UserInfo(name, career);
const popup = new PopupWithImage(imageShowPopup);

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = createCard(item, popup, '.cards__container');
    cardList.insertElementAppend(card);
  }
}, '.cards');

cardList.renderElement();

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

userPopup.submitEventListener();

function editButtonClickHandler() {
  addContentUserPopup(userInfo.getUserInfo());
  userPopup.openPopup();
  userPopup.setEventListeners();
  formEditValidator.inactiveButton();
}

formEditValidator.enableValidation();
editButton.addEventListener('click', editButtonClickHandler);

const addImagePopup = new PopupWithForm({
  popupSelector: imageAddPopup,
  handleFormReset: () => {
    formAddValidator.clearForm();
  },
  handleFormSubmit: (inputValues) => {
    addImagePopup.closePopup();
    addImagePopup.resetForm();
    const card = createCard(inputValues, popup, '.cards__container');
    cardList.insertElementPrepend(card);
  }});
addImagePopup.submitEventListener();

function addButtonClickHandler() {
  addImagePopup.openPopup();
  addImagePopup.setEventListeners();
  formAddValidator.inactiveButton();
}

formAddValidator.enableValidation();
addButton.addEventListener('click', addButtonClickHandler);
