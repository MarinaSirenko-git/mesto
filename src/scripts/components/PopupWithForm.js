import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit, handleFormReset}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._handleFormReset = handleFormReset;
    this._form = this._element.querySelector('.popup__container');
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__input');
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

  close() {
    super.close();
    this._handleFormReset();
  }
 
  resetForm() { 
    this._form.reset();
  }

  _handleSubmitBtn() {
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

}