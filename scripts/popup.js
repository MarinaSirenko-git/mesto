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

//Ф-я обработчик при нажатии на esc
function elementKeydownHandler(element){
  return function( evt ){
    if ((evt.key) == 'Escape') {
      return closePopup(element);
    }
  };
}

//Ф-я обработчик при клике вне popup
function elementMousedownHandler(element) {
  return function (evt) {
    if (evt.target.classList.contains('popup')) {
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