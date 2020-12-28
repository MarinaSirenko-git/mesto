import {
  careerInput,
  nameInput
} from './constants.js';

import Card from '../components/Card.js';

export function addContentUserPopup(data) {
  nameInput.value = data.nameUser;
  careerInput.value = data.career;
}

export function createCard(data, instance, containerSelector) {
  const instanceCard = new Card({
    data: data,
    handleCardClick: () => {
      instance.openPopup(data);
      instance.setEventListeners();
      instance.setEventListenersToDelete();
    }}, containerSelector);
    return instanceCard;
}