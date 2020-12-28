import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit, handleFormReset}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._handleFormReset = handleFormReset;
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
    this._element.addEventListener('submit', this._handleSubmitBtn.bind(this));
  }
 
  resetForm() { 
    this._element.querySelector('.popup__container').reset();
  }

  _handleSubmitBtn() {
    this._handleFormSubmit(this._getInputValues());
  }

  _handleBtnClose() {
    super._handleBtnClose();
    this._handleFormReset();
}

  _handleEscClose(evt) {
    super._handleEscClose(evt);
    if ((evt.key) === 'Escape') {
      this._handleFormReset();
    }
  }

  _handleSpaceClose(evt) {
    super._handleSpaceClose(evt);
    if (evt.target.classList.contains('popup')) {
    this._handleFormReset();
  }}

}