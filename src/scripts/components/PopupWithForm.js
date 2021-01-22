import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit, handleFormReset}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._handleFormReset = handleFormReset;
    this._form = this._element.querySelector('.popup__container');
    this._buttonSubmit = this._element.querySelector('.popup__btn');
    this._inputList = this._element.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmitBtn.bind(this));
  }

  _handleSubmitBtn() {
    this._handleFormSubmit(this._getInputValues());
  }

  close() {
    super.close();
    this._handleFormReset();
  }
 
  resetForm() { 
    this._form.reset();
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._buttonSubmit.textContent = 'Сохранение...';
    } else {
      this._buttonSubmit.textContent = 'Сохранить';
    }
  }

}