export default class Popup {
  constructor(popupSelector) {
    this._element = popupSelector;
  }

  openPopup() {
    this._element.classList.add('popup_opened');
  }

  closePopup() {
    this._element.classList.remove('popup_opened');
  }

  _resetForm() { 
    this._handleFormReset();
  }

  setEventListeners() {
    this._element.querySelector('.popup__close-icon').addEventListener('click', this._handleBtnClose.bind(this));
    this._element.addEventListener('mousedown', this._handleSpaceClose.bind(this));
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  setEventListenersToDelete() {
    this._element.querySelector('.popup__close-icon').removeEventListener('click', this._handleBtnClose.bind(this));
    this._element.removeEventListener('mousedown', this._handleSpaceClose.bind(this));
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
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