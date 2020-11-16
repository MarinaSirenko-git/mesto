const user = document.querySelector('.user');
const name = user.querySelector('.user-info__name');
const career = user.querySelector('.user-info__career');

const popup = document.querySelector('.popup');
const userInfoPopup = document.querySelector('.popup_type_user-info');
const imageAddPopup = document.querySelector('.popup_type_add-image');
const imageShowPopup = document.querySelector('.popup_type_show-image');

const editButton = user.querySelector('.user-info__edit-icon');
const addButton = user.querySelector('.user-info__add-icon');
const closeUserPopupButton = userInfoPopup.querySelector('.popup__close-icon_place_user-info');
const closeAddImagePopupButton = imageAddPopup.querySelector('.popup__close-icon_place_add-image');

const formElement = popup.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_type_name');
const careerInput = formElement.querySelector('.popup__input_type_career');



function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
} 

function editButtonSubmitHandler() {
  nameInput.value = name.textContent; 
  careerInput.value = career.textContent;
  openPopup(userInfoPopup);
}

editButton.addEventListener('click', editButtonSubmitHandler);

function addButtonSubmitHandler() {
  openPopup(imageAddPopup);
}

addButton.addEventListener('click', addButtonSubmitHandler);

function closeButtonUserSubmitHandler() {
  closePopup(userInfoPopup);
}

closeUserPopupButton.addEventListener('click', closeButtonUserSubmitHandler);

function closeButtonAddImageSubmitHandler() {
  closePopup(imageAddPopup);
}

closeAddImagePopupButton.addEventListener('click', closeButtonAddImageSubmitHandler);

function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  career.textContent = careerInput.value;
  closePopup(userInfoPopup);
}

formElement.addEventListener('submit', formSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const cardsTemplate = document.querySelector('.cards__container').content;

function renderCard(card) {
  const cardElement = cardsTemplate.cloneNode(true);

  const imageCloseButton = imageShowPopup.querySelector('.popup__close-icon_place_show-image');
  const image = cardElement.querySelector('.cards__photo');

  const imageCaption = imageShowPopup.querySelector('.popup__image-caption');
  const imageLink = imageShowPopup.querySelector('.popup__fullsize-image');

  cardElement.querySelector('.cards__photo').src = card.link;
  cardElement.querySelector('.cards__title').textContent = card.name;
  
  image.addEventListener('click', function() {
    imageCaption.textContent = card.name;
    imageLink.src = card.link;
    openPopup(imageShowPopup);
  });

  imageCloseButton.addEventListener('click', function() {
    closePopup(imageShowPopup);
  });

  cardElement.querySelector('.cards__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like-btn_active');
  });

  cardElement.querySelector('.cards__remove-btn').addEventListener('click', function (evt) {
      const removeCards = evt.target.closest('.cards__item');
      removeCards.remove();
    });

  return cardElement;
}

const containerCards = document.querySelector('.cards');
const fragment = document.createDocumentFragment();

for (let i = 0; i < initialCards.length; i++) {
  fragment.appendChild(renderCard(initialCards[i]));
}

containerCards.appendChild(fragment);

 
const addImageForm = imageAddPopup.querySelector('.popup__container');
const titleInput = addImageForm.querySelector('.popup__input_type_title');
const linkInput = addImageForm.querySelector('.popup__input_type_link'); 

function formImageSubmitHandler (evt) {
  evt.preventDefault();
  const titleArr = titleInput.value;
  const linkArr = linkInput.value;
  const newArr = ({name: titleArr, link: linkArr});
  containerCards.prepend(renderCard(newArr));
  titleInput.value = "";
  linkInput.value = "";
  closePopup(imageAddPopup);
}; 

addImageForm.addEventListener('submit', formImageSubmitHandler);
