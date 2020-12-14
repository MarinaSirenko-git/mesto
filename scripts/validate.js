import {validationConfig} from './../scripts/initial-validation.js';

export class FormValidator {
  constructor(config, element) {
    this._element = element;
    this._inputElement = config.inputElement;
    this._buttonElement = config.buttonElement;
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

  _toggleButtonState(button, isActive) {
    if (isActive) {
      button.classList.remove(this._inactiveButtonClass);
    } else {
      button.classList.add(this._inactiveButtonClass);
    }
  }

  _setInputListeners() {
    const inputsArr = Array.from(this._element.querySelectorAll(this._inputElement));

    const button = this._element.querySelector(this._buttonElement);
    this._toggleButtonState(button, this._element.checkValidity());
  
    inputsArr.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(button, this._element.checkValidity());
      });
    });
  }

  enableValidation() {
    this._element.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
      this._setInputListeners();
  }
}
