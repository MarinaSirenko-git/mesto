const user = document.querySelector('.user');
const name = user.querySelector('.user-info__name');
const career = user.querySelector('.user-info__career');

const popup = document.querySelector('.popup');
const visiblePopup = document.querySelector('.popup_opened');
const userInfoPopup = document.querySelector('.popup_type_user-info');
const userSubmitButton = userInfoPopup.querySelector('.popup__btn');
const imageAddPopup = document.querySelector('.popup_type_add-image');
const imageSubmitButton = imageAddPopup.querySelector('.popup__btn');
const imageShowPopup = document.querySelector('.popup_type_show-image');

const editButton = user.querySelector('.user-info__edit-icon');
const addButton = user.querySelector('.user-info__add-icon');
const closeUserPopupButton = userInfoPopup.querySelector('.popup__close-icon_place_user-info');
const closeAddImagePopupButton = imageAddPopup.querySelector('.popup__close-icon_place_add-image');


const editUserForm = document.forms['user-info'];
const nameInput = editUserForm.elements['user-name'];
const careerInput = editUserForm.elements['user-career'];

const addImageForm = document.forms['add-image'];
const titleInput = addImageForm.elements['photo-title'];
const linkInput = addImageForm.elements['photo-link'];


const validationConfig = {
  formElement: '.popup__container',
  inputElement: '.popup__input',
  buttonElement: '.popup__btn',
  inactiveButtonClass: 'input__btn_inactive',
  inputErrorClass: 'popup__input_status_error',
  errorClass: 'popup__input-error_active'
};
