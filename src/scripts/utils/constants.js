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

//данные для инициализации карточек
export const initialCards = [
  {
    name: 'COVID-19',
    link: 'https://static.demilked.com/wp-content/uploads/2020/04/5e901b0719765-coronavirus-themed-street-art-around-the-world-coverimage.jpg'
  },
  {
    name: 'Océan Indien',
    link: 'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0cmVldCUyMGFydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Pacifique',
    link: 'https://images.unsplash.com/photo-1533157785824-c1febdd284dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldCUyMGFydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Make Love not War',
    link: 'https://images.unsplash.com/photo-1506057278219-795838d4c2dd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGdyYWZpdHRpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Amor Livre',
    link: 'https://images.unsplash.com/photo-1533239897665-b98ee3180b94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyYWZpdHRpfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Lusy',
    link: 'https://images.unsplash.com/photo-1517776832751-0a7e6993de03?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0JTIwYXJ0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60'
  }
]; 