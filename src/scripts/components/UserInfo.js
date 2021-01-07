export default class UserInfo {
  constructor(nameSelector, careerSelector) {
    this._nameUser = nameSelector;
    this._career = careerSelector;
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