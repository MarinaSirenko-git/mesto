import Popup from './Popup.js';

export default class PopupWithoutInput extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._element.querySelector('.popup__container');
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
    this._form.addEventListener('submit', () => {
			this._handleSubmitCallback();
    });
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  }

}