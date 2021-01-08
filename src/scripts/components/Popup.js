export default class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._handleBtnClose = this._handleBtnClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._element.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._element.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._element.querySelector('.popup__close-icon').addEventListener('click', this._handleBtnClose);
    this._element.addEventListener('mousedown', this._handleOverlayClose);  
  }

  _handleBtnClose() {
    this.close();
}

  _handleEscClose(evt) {
    if ((evt.key) === 'Escape') {
    this.close();
  }}

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup')) {
    this.close();
  }}

}