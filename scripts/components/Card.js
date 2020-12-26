//задача? 
//возможность сколько угодно генерировать однотипных карточек

//какие данные хранит класс Card?
//массив объектов, селектор template-элемента

//какие методы будут приватными? 
//метод создающий элемент карточки и наполняющий её контентом, методы обрабатывающие события, методы слушающие события

//какие методы будут публичными? 
//метод генерирующий готовую к публикации карточку
export default class Card {
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const image = this._element.querySelector('.cards__photo');
    const title = this._element.querySelector('.cards__title');

    image.src = this._link;
    image.alt = this._name;
    title.textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.cards__like-btn').addEventListener('click', this._handleLikeClick);
    this._element.querySelector('.cards__remove-btn').addEventListener('click', this._handleDeleteClick);
    this._element.querySelector('.cards__photo').addEventListener('click', () => {
			this._handleCardClick();
    });
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle('cards__like-btn_active');
  }

  _handleDeleteClick(evt) { 
    evt.target.closest('.cards__item').remove(); 
  } 
}


