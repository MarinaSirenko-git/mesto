export default class UserInfo {
  constructor(nameSelector, careerSelector, avatarSelector) {
    this._nameUser = document.querySelector(nameSelector);
    this._career = document.querySelector(careerSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const name = this._nameUser.textContent;
    const career = this._career.textContent;
    return {name, career};
  }

  setUserInfo(data) {
    this._nameUser.textContent = data.name;
    this._career.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }

  getUserId() {
    return this._id;
  }

}