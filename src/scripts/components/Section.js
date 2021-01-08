export default class Section {
  constructor({data, renderer}, containerSelector) {
    this._renderedElements = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  insertElementAppend(element) {
    this._container.append(element);
  }

  insertElementPrepend(element) {
    this._container.prepend(element);
  }

  renderElements() {
    this._renderedElements.forEach(element => {
      this._renderer(element);
    });
  }
}