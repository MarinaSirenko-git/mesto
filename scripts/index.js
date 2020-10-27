// Записываем в переменные необходимые элементы
const popup = document.querySelector('.popup');
const user = document.querySelector('.user');
const popupCloseButton = popup.querySelector('.popup__close-icon');
const editButton = user.querySelector('.user-info__edit-icon');
const nameInput = popup.querySelector('.popup__input_type_name');
const careerInput = popup.querySelector('.popup__input_type_career');
const name = user.querySelector('.user-info__name');
const career = user.querySelector('.user-info__career');
const formElement = popup.querySelector('.popup__container');

// Отдельно создаём функцию, которая добавляет класс popup_opened, а так же текстовое содержимое в значение input
function showPopup() {
  nameInput.value = name.textContent;
  careerInput.value = career.textContent;
  popup.classList.add('popup_opened');
}

// Отдельно создаём функцию, которая убирает класс popup_opened  
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  career.textContent = careerInput.value;
  closePopup();
}

// Подписываемся на событие клика для кнопки редактирования
editButton.addEventListener('click', showPopup);

// Подписываемся на событие клика для кнопки закрытия
popupCloseButton.addEventListener('click', closePopup);

// Подписываемся на событие submit
formElement.addEventListener('submit', formSubmitHandler); 
