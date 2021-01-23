import './index.css';

import {
  editButton,
  addButton,
  editAvatar,
  editUserForm,
  addImageForm,
  editAvatarForm,
  careerInput,
  nameInput,
  userAvatar,
} from '../scripts/utils/constants.js';

import { validationConfig } from '../scripts/utils/constants.js';
import Api from '../scripts/components/Api.js'
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithDelete from '../scripts/components/PopupWithDelete.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Card from '../scripts/components/Card.js';

function addContentUserPopup(data) {
  nameInput.value = data.name;
  careerInput.value = data.career;
}

const formAddValidator = new FormValidator(validationConfig, addImageForm);
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(validationConfig, editUserForm);
formEditValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(validationConfig, editAvatarForm);
formEditAvatarValidator.enableValidation();

const deletePopup = new PopupWithDelete('.popup_type_delete-image');
deletePopup.setEventListeners();

const userInfo = new UserInfo('.user-info__name', '.user-info__career', '.user-info__user-photo');

const imagePopup = new PopupWithImage('.popup_type_show-image');
imagePopup.setEventListeners();

const createCard = (data) => {
  const instanceCard = new Card({
    data: data,
    userId: userInfo.getUserId(),
    handleCardClick: () => {
      imagePopup.open(data);
    },
    handleDeleteClick: () => {
      deletePopup.open();
      deletePopup.setSubmitAction(() => {
        api.removeCard(instanceCard.getId())
          .then(() => {
            instanceCard.deleteCard();
            deletePopup.close();  
          })
          .catch(error => console.log(`Ошибка ${error}`))
      })
    },
    likeAddTracker: (isLike) => {
      if(isLike) {
        api.removeLike(instanceCard.getId())
          .then(
            instanceCard.removeLike()
          )
          .catch(error => console.log(`Ошибка ${error} при удалении лайка`))
      } else {
        api.doLike(instanceCard.getId())
          .then(
            instanceCard.addLike()
          )
          .catch(error => console.log(`Ошибка ${error} при отправке лайка`))
      }
    }}, '.cards__container');

    return instanceCard.generateCard();
}

const cardList = new Section({
  renderer: (data) => {
    cardList.insertElementAppend(createCard(data));
  }
}, '.cards');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers: {
    authorization: 'a725ec8a-f191-4a4f-b4ad-38c2f082c6d7',
    'Content-Type': 'application/json'
  }
});

Promise.all(
  [
    api.getUserData(),
    api.getInitialCards()
  ]
)
  .then(([userDataResult, initialCardsResult]) => {
    userInfo.setUserInfo(userDataResult);
    cardList.renderElements(initialCardsResult);
  })
  .catch(() => {
    (error => console.log(error))
  })

const userPopup = new PopupWithForm({
  popupSelector: '.popup_type_user-info',
  handleFormSubmit: (inputValues) => {
    userPopup.renderLoading(true);
    api.updateUserData(inputValues)
      .then((result) => {
        console.log(result);
        userInfo.setUserInfo(result);
        userPopup.close();
      })
      .catch(error => console.log('Ошибка при отправке информации о пользователе'))
      .finally(() => {
        userPopup.renderLoading(false);
      })
  },
  handleFormReset: () => {
    formEditValidator.clearForm();
  }
});
userPopup.setEventListeners();

function editButtonClickHandler() {
  addContentUserPopup(userInfo.getUserInfo());
  userPopup.open();
  formEditValidator.changeButtonState();
}

editButton.addEventListener('click', editButtonClickHandler);

const addImagePopup = new PopupWithForm({
  popupSelector: '.popup_type_add-image',
  handleFormReset: () => {
    formAddValidator.clearForm();
  },
  handleFormSubmit: (data) => {
    addImagePopup.renderLoading(true);
    api.addNewCard(data)
    .then((result) => {
      cardList.insertElementPrepend(createCard(result));
    })
    .catch(error => console.log(`Ошибка ${error} при создании карточки`))
    .finally(() => {
      addImagePopup.renderLoading(false);
      addImagePopup.close();
      addImagePopup.resetForm();
    })
  }
});
addImagePopup.setEventListeners();

function addButtonClickHandler() {
  addImagePopup.open();
  formAddValidator.changeButtonState();
}

addButton.addEventListener('click', addButtonClickHandler);

const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_user-avatar',
  handleFormReset: () => {
    formEditAvatarValidator.clearForm();
  },
  handleFormSubmit: (data) => {
    editAvatarPopup.renderLoading(true);
    api.updateAvatar(data)
      .then((result) => {
        userAvatar.src = result.avatar;
      })
      .catch(error => console.log('Ошибка при отправке аватара пользователя'))
      .finally(() => {
        editAvatarPopup.renderLoading(false);
        editAvatarPopup.close();
        editAvatarPopup.resetForm();
      });
  }});
editAvatarPopup.setEventListeners();

function editButtonAvatarClickHandler() {
  editAvatarPopup.open();
  formEditAvatarValidator.changeButtonState();
}

editAvatar.addEventListener('click', editButtonAvatarClickHandler);

