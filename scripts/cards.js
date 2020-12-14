//импортируем константу и ф-и открытия/закрытия
import {imageShowPopup} from './../scripts/constants.js';
import {openPopup, closePopup} from './../scripts/popup.js';

//задача? 
//возможность сколько угодно генерировать однотипных карточек

//какие данные хранит класс Card?
//массив объектов, селектор template-элемента

//какие методы будут приватными? 
//метод создающий элемент карточки и наполняющий её контентом, методы обрабатывающие события, методы слушающие события

//какие методы будут публичными? 
//метод генерирующий готовую к публикации карточку
export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
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
    this._element.querySelector('.cards__like-btn').addEventListener('click', (evt) => {
      this._handleLikeClick(evt);
    });

    this._element.querySelector('.cards__remove-btn').addEventListener('click', (evt) => {
      this._handleDeleteClick(evt);
    });

    this._element.querySelector('.cards__photo').addEventListener('click', () => {
			this._handleImageClick();
    });
    
    imageShowPopup.querySelector('.popup__close-icon_place_show-image').addEventListener('click', () => {
      this._handleCloseClick();
    });

  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle('cards__like-btn_active');
  }

  _handleDeleteClick(evt) {
    evt.target.closest('.cards__item').remove();
  }

  _handleImageClick() {
    const caption = imageShowPopup.querySelector('.popup__image-caption');
    const image = imageShowPopup.querySelector('.popup__fullsize-image');
    caption.textContent = this._name;
    image.src = this._link;
    image.alt = this._name;
    openPopup(imageShowPopup);
  }

  _handleCloseClick() {
    closePopup(imageShowPopup);
  }
}


