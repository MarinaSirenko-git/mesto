import Popup from './Popup.js';

export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._element.querySelector('.popup__container');
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }



}