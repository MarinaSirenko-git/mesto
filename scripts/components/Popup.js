export default class Popup {
  constructor(popupSelector) {
    this._element = popupSelector;
    this._closeBtnHandler = this._handleBtnClose.bind(this);
    this._closeEscHandler = this._handleSpaceClose.bind(this);
    this._closeSpaceHandler = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._element.classList.add('popup_opened');
  }

  closePopup() {
    this._element.classList.remove('popup_opened');
  }

  setEventListeners() {
    this._element.querySelector('.popup__close-icon').addEventListener('click', this._closeBtnHandler);
    this._element.addEventListener('mousedown', this._closeEscHandler);
    document.addEventListener('keydown', this._closeSpaceHandler);
  }

  setEventListenersToDelete() {
    this._element.querySelector('.popup__close-icon').removeEventListener('click', this._closeBtnHandler);
    this._element.removeEventListener('mousedown', this._closeEscHandler);
    document.removeEventListener('keydown', this._closeSpaceHandler);
  }

  _handleBtnClose() {
    this.closePopup();
}

  _handleEscClose(evt) {
    if ((evt.key) === 'Escape') {
    this.closePopup();
  }}

  _handleSpaceClose(evt) {
    if (evt.target.classList.contains('popup')) {
    this.closePopup();
  }}

}