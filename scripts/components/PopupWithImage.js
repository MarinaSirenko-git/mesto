import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  openPopup(data) {
    this._element.querySelector('.popup__fullsize-image').src = data.link;
    this._element.querySelector('.popup__fullsize-image').alt = data.link;
    this._element.querySelector('.popup__image-caption').textContent = data.name;
    super.openPopup();
    return this._element;
  }

}