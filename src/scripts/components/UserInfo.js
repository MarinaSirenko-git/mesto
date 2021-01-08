export default class UserInfo {
  constructor(nameSelector, careerSelector) {
    this._nameUser = document.querySelector(nameSelector);
    this._career = document.querySelector(careerSelector);
  }

  getUserInfo() {
    const name = this._nameUser.textContent;
    const career = this._career.textContent;
    return {name, career};
  }

  setUserInfo({name, career}) {
    this._nameUser.textContent = name;
    this._career.textContent = career;
  }
}