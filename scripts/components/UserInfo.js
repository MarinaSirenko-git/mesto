export default class UserInfo {
  constructor(nameSelector, careerSelector) {
    this._nameUser = nameSelector;
    this._career = careerSelector;
  }

  getUserInfo() {
    const nameUser = this._nameUser.textContent;
    const career = this._career.textContent;
    return {nameUser, career};
  }

  setUserInfo({nameUser, career}) {
    this._nameUser.textContent = nameUser;
    this._career.textContent = career;
  }
}