export default class Section {
  constructor({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  insertElementAppend(element) {
    this._container.append(element);
  }

  insertElementPrepend(element) {
    this._container.prepend(element);
  }

  renderElements(items) {
    items.forEach(element => {
      this._renderer(element);
    });
  }
}