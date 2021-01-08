export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick; 
  }

  _getTemplate() {
    return document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__photo');
    const title = this._element.querySelector('.cards__title');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    title.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.cards__like-btn').addEventListener('click', this._handleLikeClick);
    this._element.querySelector('.cards__remove-btn').addEventListener('click', () => this._handleDeleteClick());
    this._cardImage.addEventListener('click', () => {
			this._handleCardClick();
    });
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle('cards__like-btn_active');
  }

  _handleDeleteClick() { 
    this._element.remove(); 
  } 
}


