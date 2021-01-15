export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.headers.authorization;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });
  }

  updateUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test',
        about: 'Test'
      })
    })
  }

  addNewCard() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'NewCard',
        link: 'https://i.pinimg.com/originals/77/37/56/773756911f17695b6adc887a351d245f.jpg'
      })
    })
  }
  
}