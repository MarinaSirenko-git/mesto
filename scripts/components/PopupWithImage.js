import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._image = data.link;
    this._caption = data.name;
  }

  openPopup() {
    this._element.querySelector('.popup__fullsize-image').src = this._image;
    this._element.querySelector('.popup__fullsize-image').alt = this._image;
    this._element.querySelector('.popup__image-caption').textContent = this._caption;
    super.openPopup();
    return this._element;
  }

}