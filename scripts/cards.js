
const cardsTemplate = document.querySelector('.cards__container').content;

//ф-я получения разметки из template
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

//блок кода который инициирует обход по массиву с данными и отрисовывает карточки
const containerCards = document.querySelector('.cards');
const fragment = document.createDocumentFragment();

for (let i = 0; i < initialCards.length; i++) {
  fragment.appendChild(renderCard(initialCards[i]));
}

containerCards.appendChild(fragment);

 
const addImageForm = document.forms['add-image'];
const titleInput = addImageForm.elements['photo-title'];
const linkInput = addImageForm.elements['photo-link']; 

//Ф-я добавления значений в новую карточку
function addContentImage() {
  const titleArr = titleInput.value;
  const linkArr = linkInput.value;
  const newArr = ({name: titleArr, link: linkArr});
  containerCards.prepend(renderCard(newArr));
  addImageForm.reset();
} 