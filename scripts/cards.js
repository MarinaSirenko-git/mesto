
const cardsTemplate = document.querySelector('.cards__container').content;

//ф-я получения разметки из template
function createCard(card) {
  const cardElement = cardsTemplate.cloneNode(true);

  const imageCloseButton = imageShowPopup.querySelector('.popup__close-icon_place_show-image');
  const image = cardElement.querySelector('.cards__photo');

  const imageCaption = imageShowPopup.querySelector('.popup__image-caption');
  const imageLink = imageShowPopup.querySelector('.popup__fullsize-image');

  cardElement.querySelector('.cards__photo').src = card.link;
  cardElement.querySelector('.cards__photo').alt = card.name;
  cardElement.querySelector('.cards__title').textContent = card.name;
  
  image.addEventListener('click', function() {
    imageCaption.textContent = card.name;
    imageLink.src = card.link;
    imageLink.alt = card.name;
    openPopup(imageShowPopup);
  });

  imageCloseButton.addEventListener('click', function() {
    closePopup(imageShowPopup);
  });

  cardElement.querySelector('.cards__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like-btn_active');
  });

  cardElement.querySelector('.cards__remove-btn').addEventListener('click', function (evt) {
      const cardToDelete = evt.target.closest('.cards__item');
      cardToDelete.remove();
    });

  return cardElement;
}

const containerCards = document.querySelector('.cards');

initialCards.forEach((element) => {
  containerCards.appendChild(createCard(element));
});

//Ф-я добавления значений в новую карточку
function addContentImage() {
  const title = titleInput.value;
  const link = linkInput.value;
  const newCard = ({name: title, link: link});
  containerCards.prepend(createCard(newCard));
}

