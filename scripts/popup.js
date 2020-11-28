//Ф-я добавляет класс со стилями видимости, а также обработчики при клике на поле вокруг попапа или нажатии Esc
function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', elementKeydownHandler(element));
  element.addEventListener('mousedown', elementMousedownHandler(element));
}

//Ф-я убирает класс со стилями видимости, а также обработчики при клике на поле вокруг попапа или нажатии Esc
function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', elementKeydownHandler(element));
  element.removeEventListener('mousedown', elementMousedownHandler(element));
} 

//Ф-я очищает input
function clearInput(element, config) {
  const form = element.querySelector('.popup__container');
  const inputList = element.querySelectorAll('.popup__input');
  const inputs = Array.from(inputList);
  inputs.forEach(input => {
    hideInputError(form, input, config);
    input.value = ''; 
  });
}

//Ф-я если находит в попапе кнопку добавляет ей стили неактивности
function resetButton(element, config) {
  const button = element.querySelector('.popup__btn');
  if(element.contains(button)) {
    button.classList.add(config.inactiveButtonClass);
  }
}

//Ф-я обработчик при нажатии на esc
function elementKeydownHandler(element) {
  return function( evt ){
    if ((evt.key) === 'Escape') {
      clearInput(element, validationConfig);
      resetButton(element, validationConfig);
      return closePopup(element);
    }
  };
}

//Ф-я обработчик при клике вне popup
function elementMousedownHandler(element) {
  return function (evt) {
    if (evt.target.classList.contains('popup')) {
      clearInput(element, validationConfig);
      resetButton(element, validationConfig);
      return closePopup(element);
    }
  };
}

//Ф-я обработчик кнопки редактирования
function editButtonClickHandler() {
  nameInput.value = name.textContent; 
  careerInput.value = career.textContent;
  openPopup(userInfoPopup);
}

editButton.addEventListener('click', editButtonClickHandler);


//Ф-я обработчик кнопки добавления
function addButtonClickHandler() {
  openPopup(imageAddPopup);
}

addButton.addEventListener('click', addButtonClickHandler);

//Ф-я обработчик кнопки закрытия 
function closeButtonUserClickHandler() {
    closePopup(userInfoPopup);
}

closeUserPopupButton.addEventListener('click', closeButtonUserClickHandler);

//Ф-я обработчик кнопки закрытия 
function closeButtonAddImageClickHandler() {
  closePopup(imageAddPopup);
}

closeAddImagePopupButton.addEventListener('click', closeButtonAddImageClickHandler);

//Ф-я добавления значений полям
function addContentUser() {
  name.textContent = nameInput.value;
  career.textContent = careerInput.value;
}

//Ф-я обработчик события submit у кнопки
function editUserFormSubmitHandler(evt) {
  evt.preventDefault();
  addContentUser();
  closePopup(userInfoPopup);
  editUserForm.reset();
  userSubmitButton.classList.add('input__btn_inactive');
}

editUserForm.addEventListener('submit', editUserFormSubmitHandler);

//Ф-я обработчик события submit у кнопки
function addImageFormSubmitHandler(evt) {
  evt.preventDefault();
  addContentImage();
  closePopup(imageAddPopup);
  addImageForm.reset();
  imageSubmitButton.classList.add('input__btn_inactive');
}

addImageForm.addEventListener('submit', addImageFormSubmitHandler);