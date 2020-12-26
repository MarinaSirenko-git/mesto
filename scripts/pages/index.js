// Уважаемый, Кирилл :) Та ошибка, где обработчик события не удалялся, подразумевала передеделку много чего ещё.
// И я подумала - да, реализую Popup через класс. А потом меня уже было не остановить)
//



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

//импорт отдельной ф-ии
import { addContentUserPopup } from '../utils/utils.js';

//импортировать классы
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//через слой Section, создать экземпляр у класса Card, а внутри передаваемой ф-ии экземпляр PopupWithImage
const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card({
      data: item,
      handleCardClick: () => {
        const popup = new PopupWithImage(item, imageShowPopup);
        popup.openPopup();
        popup.setEventListeners();
        popup.setEventListenersToDelete();
      }}, '.cards__container');
    cardList.insertElementAppend(card.generateCard());
  }
}, '.cards');

//отрисовать на странице
cardList.renderElement();

//по клику на кнопку редактирования создать экземпляр класса PopupWithForm, а внутри передаваемой ф-ии экземпляр UserInfo
function editButtonClickHandler() {
  const userInfo = new UserInfo(name, career);
  addContentUserPopup(userInfo.getUserInfo());

  const userPopup = new PopupWithForm({
    popupSelector: userInfoPopup,
    handleFormReset: () => {
      const formEditValidator = new FormValidator(validationConfig, editUserForm);
      formEditValidator.clearForm();
    },
    handleFormSubmit: (inputValues) => {
      const dataInput = {nameUser: inputValues['user-name'], career: inputValues['user-career']};
      userInfo.setUserInfo(dataInput);
      userPopup.closePopup();
    }
  });

  userPopup.openPopup();
  userPopup.setEventListeners();
  userPopup.setEventListenersToDelete();
  const formEditValidator = new FormValidator(validationConfig, editUserForm);
  formEditValidator.enableValidation();
  formEditValidator.inactiveButton();
}

editButton.addEventListener('click', editButtonClickHandler);

//по клику на кнопку добавления создать экземпляр класса PopupWithForm, в передаваемой ф-ии создать экземпляр у класса Card, передать ф-ий экземпляр PopupWithImage
function addButtonClickHandler() {
  const addImagePopup = new PopupWithForm({
    popupSelector: imageAddPopup,
    handleFormReset: () => {
      const formAddValidator = new FormValidator(validationConfig, addImageForm);
      formAddValidator.clearForm();
    },
    handleFormSubmit: (inputValues) => {
      const dataInput = {name: inputValues['photo-title'], link: inputValues['photo-link']};
      const card = new Card({
        data: dataInput,
        handleCardClick: () => {
          const popup = new PopupWithImage(dataInput, imageShowPopup);
          popup.openPopup();
          popup.setEventListeners();
          popup.setEventListenersToDelete();
        }}, '.cards__container');
        addImagePopup.closePopup();
        cardList.insertElementPrepend(card.generateCard());
    }});
    addImagePopup.openPopup();
    addImagePopup.setEventListeners();
    addImagePopup.setEventListenersToDelete();
    const formAddValidator = new FormValidator(validationConfig, addImageForm);
    formAddValidator.enableValidation();
    formAddValidator.inactiveButton();
}

addButton.addEventListener('click', addButtonClickHandler);
