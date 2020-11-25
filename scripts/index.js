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

const editUserForm = document.forms['user-info'];
const nameInput = editUserForm.elements['user-name'];
const careerInput = editUserForm.elements['user-career'];


const initialCards = [
  {
    name: 'Чайниз фуд',
    link: 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1958&q=80'
  },
  {
    name: 'Ммм...свинина и креветки',
    link: 'https://images.unsplash.com/photo-1527578054032-8d8f044e013d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8a29yZWFuJTIwZm9vZHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Бургер',
    link: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Что-то мексиканское',
    link: 'https://images.unsplash.com/photo-1576829824883-bf9e6b522252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
  },
  {
    name: 'Вина бокал',
    link: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbmV8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Борщ',
    link: 'https://images.unsplash.com/photo-1527976746453-f363eac4d889?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cnVzc2lhbiUyMGZvb2R8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60'
  }
]; 

const validationConfig = {
  formElement: '.popup__container',
  inputElement: '.popup__input',
  buttonElement: '.popup__btn',
  inactiveButtonClass: 'input__btn_inactive',
  inputErrorClass: 'popup__input_status_error',
  errorClass: 'popup__input-error_active'
};
