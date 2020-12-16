//импортируем константы
import {
  cardsContainer,
  editButton,
  addButton,
  closeUserPopupButton,
  closeAddImagePopupButton,
  closeImagePopupButton,
  editUserForm,
  addImageForm
} from './../scripts/constants.js';

//импортируем массив для инициализации класса Card и класс Card
import {initialCards} from './../scripts/initial-cards.js';
import Card from './../scripts/cards.js';

//импортируем ф-ии-обработчики событий
import {
  editButtonClickHandler,
  addButtonClickHandler,
  imageClickHandler,
  closeButtonUserClickHandler,
  closeButtonAddImageClickHandler,
  closeButtonImageClickHandler,
  editUserFormSubmitHandler,
  addImageFormSubmitHandler
} from './../scripts/popup.js';

//генерируем карточки из массива
initialCards.forEach((item) => {
  const defaultCard = new Card(item, '.cards__container', imageClickHandler);
  const cardElement = defaultCard.generateCard();
  cardsContainer.append(cardElement);  
});

//слушаем события
editButton.addEventListener('click', editButtonClickHandler);
addButton.addEventListener('click', addButtonClickHandler);
closeUserPopupButton.addEventListener('click', closeButtonUserClickHandler);
closeAddImagePopupButton.addEventListener('click', closeButtonAddImageClickHandler);
closeImagePopupButton.addEventListener('click', closeButtonImageClickHandler);
editUserForm.addEventListener('submit', editUserFormSubmitHandler);
addImageForm.addEventListener('submit', addImageFormSubmitHandler);

//импортируем данные для инициализации класса FormValidator и класс FormValidator
import {validationConfig} from './../scripts/initial-validation.js';
import {FormValidator} from './../scripts/validate.js';

//создаем экземпляры класса FormValidator
const formEditValidator = new FormValidator(validationConfig, editUserForm);
const formAddValidator = new FormValidator(validationConfig, addImageForm);

//вызываем у экземпляров метод enableValidation
formEditValidator.enableValidation();
formAddValidator.enableValidation();