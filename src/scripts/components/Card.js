export default class Card {
  constructor({data, userId, handleCardClick, handleDeleteClick, likeAddTracker}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes.length;
    this._id = data._id;
    this._owner = data.owner._id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._likeAddTracker = likeAddTracker;
  }

  _getTemplate() {
    return document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);
  }

  getId() {
    return this._id;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__photo');
    this._likeCounter = this._element.querySelector('.cards__like-counter');
    this._likeIcon = this._element.querySelector('.cards__like-btn');
    this._deleteIcon = this._element.querySelector('.cards__remove-btn');
    const title = this._element.querySelector('.cards__title');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    title.textContent = this._name;
    this._likeCounter.textContent = this._like;
    this._setEventListeners();
    this._checkDeleteState();
    return this._element;
  }

  _checkDeleteState() {
    if(this._owner !== this._userId) {
      this._deleteIcon.remove();
    }
  }

  _checkLikeState() {
    return this._likeIcon.classList.contains('cards__like-btn_active');
  }

  _setEventListeners() {
    this._likeIcon.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._deleteIcon.addEventListener('click', () => {
      this._handleDeleteClick();
    });
    this._cardImage.addEventListener('click', () => {
			this._handleCardClick();
    });
  }

  _handleLikeClick() {
    this._likeAddTracker(this._checkLikeState());
  }

  addLike() {
    this._likeIcon.classList.add('cards__like-btn_active');
    this._likeCounter.textContent = ++this._like;
  }

  removeLike() {
    this._likeIcon.classList.remove('cards__like-btn_active');
    this._likeCounter.textContent = --this._like;
  }

  deleteCard() { 
    this._element.remove();
    this._element = null;
  }
}


