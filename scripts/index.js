import {
  // user,
  // name,
  // career,
  // popup, 
  // visiblePopup, 
  // userInfoPopup, 
  // userSubmitButton, 
  // imageAddPopup, 
  // imageSubmitButton, 
  // imageShowPopup,
  cardsContainer,
  editButton,
  addButton,
  closeUserPopupButton,
  closeAddImagePopupButton,
  editUserForm,
  nameInput,
  careerInput,
  addImageForm,
  titleInput,
  linkInput
} from './../scripts/constants.js';

import {initialCards} from './../scripts/initial-cards.js';

import {Card} from './../scripts/cards.js';

import {openPopup,
  closePopup,
  clearInput,
  resetButton,
  elementKeydownHandler,
  elementMousedownHandler,
  editButtonClickHandler,
  addButtonClickHandler,
  closeButtonUserClickHandler,
  closeButtonAddImageClickHandler,
  addContentUser,
  editUserFormSubmitHandler,
  addImageFormSubmitHandler
} from './../scripts/popup.js';

editButton.addEventListener('click', editButtonClickHandler);
addButton.addEventListener('click', addButtonClickHandler);
closeUserPopupButton.addEventListener('click', closeButtonUserClickHandler);
closeAddImagePopupButton.addEventListener('click', closeButtonAddImageClickHandler);
editUserForm.addEventListener('submit', editUserFormSubmitHandler);
addImageForm.addEventListener('submit', addImageFormSubmitHandler);

initialCards.forEach((item) => {
  const defaultCard = new Card(item, '.cards__container');
  const cardElement = defaultCard.generateCard();
  cardsContainer.append(cardElement);  
});

import {validationConfig} from './../scripts/initial-validation.js';
import {FormValidator} from './../scripts/validate.js';

const formEditValidator = new FormValidator(validationConfig, editUserForm);
const formAddValidator = new FormValidator(validationConfig, addImageForm);

formEditValidator.enableValidation();
formAddValidator.enableValidation();