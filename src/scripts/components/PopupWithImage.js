import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._element.querySelector('.popup__fullsize-image');
    this._cardTitle = this._element.querySelector('.popup__image-caption');
  }

  open(data) {
    this._cardImage.src = data.link;
    this._cardImage.alt = data.name;
    this._cardTitle.textContent = data.name;
    super.open();
  }
}