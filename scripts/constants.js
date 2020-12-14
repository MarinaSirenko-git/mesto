export const user = document.querySelector('.user');
export const name = user.querySelector('.user-info__name');
export const career = user.querySelector('.user-info__career');

export const popup = document.querySelector('.popup');
export const visiblePopup = document.querySelector('.popup_opened');
export const userInfoPopup = document.querySelector('.popup_type_user-info');
export const userSubmitButton = userInfoPopup.querySelector('.popup__btn');
export const imageAddPopup = document.querySelector('.popup_type_add-image');
export const imageSubmitButton = imageAddPopup.querySelector('.popup__btn');
export const imageShowPopup = document.querySelector('.popup_type_show-image');
export const cardsContainer = document.querySelector('.cards');

export const editButton = user.querySelector('.user-info__edit-icon');
export const addButton = user.querySelector('.user-info__add-icon');
export const closeUserPopupButton = userInfoPopup.querySelector('.popup__close-icon_place_user-info');
export const closeAddImagePopupButton = imageAddPopup.querySelector('.popup__close-icon_place_add-image');

export const editUserForm = document.forms['user-info'];
export const nameInput = editUserForm.elements['user-name'];
export const careerInput = editUserForm.elements['user-career'];

export const addImageForm = document.forms['add-image'];
export const titleInput = addImageForm.elements['photo-title'];
export const linkInput = addImageForm.elements['photo-link'];