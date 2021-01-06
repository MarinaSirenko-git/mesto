export default class FormValidator {
  constructor(config, element) {
    this._element = element;
    this._inputList = Array.from(element.querySelectorAll(config.inputElement));
    this._buttonElement = element.querySelector(config.buttonElement);
    this._inputElement = config.inputElement;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _showInputError(input, message) {
    const error = this._element.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    error.textContent = message;
    error.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const error = this._element.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    error.classList.remove(this._errorClass);
    error.textContent = '';
  }

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _toggleButtonState(isActive) {
    if (isActive) {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    } else {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    }
  }

  _setInputListeners() {
    this._toggleButtonState(this._element.checkValidity());
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(this._element.checkValidity());
      });
    });
  }

  clearForm() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
      input.value = '';
    });
  }

  inactiveButton() {
    this._inputList.forEach((input) => {
      if(input.value === "") {
        this._buttonElement.classList.add(this._inactiveButtonClass);
      }
    });
  }

  enableValidation() {
    this._element.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
      this._setInputListeners();
  }
}
