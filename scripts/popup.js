//импортируем константы
import {
  name,
  career,
  userInfoPopup, 
  userSubmitButton, 
  imageAddPopup, 
  imageSubmitButton,
  imageShowPopup, 
  cardsContainer,
  editUserForm,
  nameInput,
  careerInput,
  addImageForm,
  titleInput,
  linkInput
} from './../scripts/constants.js';

//импортируем класс Card, для ф-ии создания карточки пользователем
import Card from './Card.js';

//импортируем данные конфига
import {validationConfig} from './../scripts/initial-validation.js';

//Ф-я добавляет класс со стилями видимости, а также обработчики при клике на поле вокруг попапа или нажатии Esc
export function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', elementKeydownHandler(element));
  element.addEventListener('mousedown', elementMousedownHandler(element));
}

//Ф-я убирает класс со стилями видимости, а также обработчики при клике на поле вокруг попапа или нажатии Esc
export function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', elementKeydownHandler(element));
  element.removeEventListener('mousedown', elementMousedownHandler(element));
} 

//Ф-я очищает input
export function clearInput(element, config) {
  const inputList = element.querySelectorAll(config.inputElement);
  const inputs = Array.from(inputList);
  inputs.forEach((input) => {
    const error = element.querySelector(`#${input.id}-error`);
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
    error.textContent = '';
    input.value = '';
  });
}

//Ф-я если находит в попапе кнопку добавляет ей стили неактивности
export function resetButton(element, config) {
  const button = element.querySelector('.popup__btn');
  if(element.contains(button)) {
    button.classList.add(config.inactiveButtonClass);
  }
}

//Ф-я обработчик при нажатии на esc
export function elementKeydownHandler(element) {
  return function( evt ){
    if ((evt.key) === 'Escape') {
      clearInput(element, validationConfig);
      resetButton(element, validationConfig);
      return closePopup(element);
    }
  };
}

//Ф-я обработчик при клике вне popup
export function elementMousedownHandler(element) {
  return function (evt) {
    if (evt.target.classList.contains('popup')) {
      clearInput(element, validationConfig);
      resetButton(element, validationConfig);
      return closePopup(element);
    }
  };
}

//Ф-я обработчик кнопки редактирования
export function editButtonClickHandler() {
  nameInput.value = name.textContent; 
  careerInput.value = career.textContent;
  openPopup(userInfoPopup);
}

//Ф-я обработчик кнопки добавления
export function addButtonClickHandler() {
  openPopup(imageAddPopup);
}

//Ф-я обработчик кнопки закрытия 
export function closeButtonUserClickHandler() {
    closePopup(userInfoPopup);
    clearInput(userInfoPopup, validationConfig);
    resetButton(userInfoPopup, validationConfig);
}

//Ф-я обработчик кнопки закрытия 
export function closeButtonAddImageClickHandler() {
  closePopup(imageAddPopup);
  clearInput(imageAddPopup, validationConfig);
  resetButton(imageAddPopup, validationConfig);
}

//Ф-я обработчик кнопки закрытия 
export function closeButtonImageClickHandler() {
  closePopup(imageShowPopup);
}

//Ф-я добавления значений полям
export function addContentUser() {
  name.textContent = nameInput.value;
  career.textContent = careerInput.value;
}

//Ф-я обработчик события submit у кнопки
export function editUserFormSubmitHandler() {
  addContentUser();
  closePopup(userInfoPopup);
  editUserForm.reset();
  userSubmitButton.classList.add('input__btn_inactive');
}

//Ф-я обработчик события submit у кнопки
export function addImageFormSubmitHandler() {
  addContentImage();
  closePopup(imageAddPopup);
  addImageForm.reset();
  imageSubmitButton.classList.add('input__btn_inactive');
}

export function getCard(data, selector, handler) {
  const card = new Card(data, selector, handler);
  const cardElement = card.generateCard();
  return cardElement;
}

//Ф-я генерирующая новую карточку
export function addContentImage() {
  const name = titleInput.value;
  const link = linkInput.value;
  const newCard = ({name, link});
  const cardElement = getCard(newCard, '.cards__container', imageClickHandler);
  cardsContainer.prepend(cardElement); 
}

//ф-я обработчик клика по картинке в карточке
export function imageClickHandler(name, link) {
  const caption = imageShowPopup.querySelector('.popup__image-caption');
  const image = imageShowPopup.querySelector('.popup__fullsize-image');
  caption.textContent = name;
  image.src = link;
  image.alt = name;
  openPopup(imageShowPopup);
}