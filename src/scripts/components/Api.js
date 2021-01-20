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
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

  updateUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.career
      })
    })
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.link
      })
    })
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

  removeCard(_id) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

  doLike(_id) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

  removeLike(_id) {
    return fetch(`${this._baseUrl}/cards/likes/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(result => 
      result.ok ? 
      result.json() : 
      Promise.reject(`Ошибка ${result.status}`)
    )
  }

}