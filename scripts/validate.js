//Ф-я добавляет класс со стилями к input, к span c текстом ошибки и сам текст ошибки

function showInputError(form, input, message, config) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  error.textContent = message;
  error.classList.add(config.errorClass);
}

//Ф-я убирает класс со стилями к input, к span c текстом ошибки и очищает текст ошибки
function hideInputError(form, input, config) {
  const error = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
  error.textContent = '';
}

//Ф-я проверяет состояние valid у встроенного объекта ValidityState, и если оно не true - вызовет showInputError, если true - hideInputError
function checkInputValidity(form, input, config) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  } else {
    hideInputError(form, input, config);
  }
}

//Ф-я в зависимости от результата проверки добавляет или убирает класс со стилями неактивной кнопки
function toggleButtonState(button, isActive, config) {
  if(isActive) {
    button.classList.remove(config.inactiveButtonClass);
  }else {
    button.classList.add(config.inactiveButtonClass);
  }
}

//Ф-я слушает событие input и по каждому вводу вызывает ф-ю проверки валидности и ф-ю переключения состояния кнопки
function setInputListeners(form, config) {
  const inputsArr = Array.from(form.querySelectorAll(config.inputElement));
  
  const button = form.querySelector(config.buttonElement);
  toggleButtonState(button, form.checkValidity(), config);

  inputsArr.forEach((input) => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, config);
      toggleButtonState(button, form.checkValidity(), config);
    });
  });
}

//Ф-я слушает событие submit у каждой формы, отменяет стандартные действия по событию и убирает класс видимости у popup
function enableValidation(config) {
  const formsArr = Array.from(document.querySelectorAll(config.formElement));
  formsArr.forEach((form) => {

    setInputListeners(form, config);

    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  });
}

enableValidation(validationConfig);