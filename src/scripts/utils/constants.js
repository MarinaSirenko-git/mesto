export const user = document.querySelector('.user');
export const userAvatar = user.querySelector('.user-info__user-photo');
export const editButton = user.querySelector('.user-info__edit-icon');
export const addButton = user.querySelector('.user-info__add-icon');
export const editAvatar = user.querySelector('.user-info__edit-user-photo');
export const editUserForm = document.forms['user-info'];
export const nameInput = document.querySelector('.popup__input_type_name');
export const careerInput = document.querySelector('.popup__input_type_career');
export const addImageForm = document.forms['add-image'];
export const editAvatarForm = document.forms['avatar'];

//конфиг для класса валидации
export const validationConfig = {
  inputElement: '.popup__input',
  buttonElement: '.popup__btn',
  inactiveButtonClass: 'input__btn_inactive',
  inputErrorClass: 'popup__input_status_error',
  errorClass: 'popup__input-error_active'
};
