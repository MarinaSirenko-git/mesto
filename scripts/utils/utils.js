import {
  careerInput,
  nameInput
} from './constants.js';

export function addContentUserPopup(data) {
  nameInput.value = data.nameUser;
  careerInput.value = data.career;
}