(()=>{"use strict";var e=document.querySelector(".user"),t=e.querySelector(".user-info__user-photo"),n=e.querySelector(".user-info__edit-icon"),r=e.querySelector(".user-info__add-icon"),o=e.querySelector(".user-info__edit-user-photo"),i=document.forms["user-info"],a=document.querySelector(".popup__input_type_name"),c=document.querySelector(".popup__input_type_career"),u=document.forms["add-image"],s=document.forms.avatar,l={inputElement:".popup__input",buttonElement:".popup__btn",inactiveButtonClass:"input__btn_inactive",inputErrorClass:"popup__input_status_error",errorClass:"popup__input-error_active"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._token=t.headers.authorization}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"updateUserData",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.career})}).then(this._checkResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"doLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}}])&&f(t.prototype,n),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=n,this._inputList=Array.from(n.querySelectorAll(t.inputElement)),this._buttonElement=n.querySelector(t.buttonElement),this._inputElement=t.inputElement,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._element.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._element.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_toggleButtonState",value:function(e){e?this._buttonElement.classList.remove(this._inactiveButtonClass):this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_setInputListeners",value:function(){var e=this;this._toggleButtonState(this._element.checkValidity()),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._element.checkValidity())}))}))}},{key:"clearForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),t.value=""}))}},{key:"changeButtonState",value:function(){this._toggleButtonState(this._element.checkValidity())}},{key:"enableValidation",value:function(){this._element.addEventListener("submit",(function(e){e.preventDefault()})),this._setInputListeners()}}])&&p(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"insertElementAppend",value:function(e){this._container.append(e)}},{key:"insertElementPrepend",value:function(e){this._container.prepend(e)}},{key:"renderElements",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&_(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._handleBtnClose=this._handleBtnClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._element.querySelector(".popup__close-icon").addEventListener("click",this._handleBtnClose),this._element.addEventListener("mousedown",this._handleOverlayClose)}},{key:"_handleBtnClose",value:function(){this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close()}}])&&v(t.prototype,n),e}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._cardImage=t._element.querySelector(".popup__fullsize-image"),t._cardTitle=t._element.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e){this._cardImage.src=e.link,this._cardImage.alt=e.link,this._cardTitle.textContent=e.name,g(E(a.prototype),"open",this).call(this)}}])&&k(t.prototype,n),a}(m);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return(I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit,o=e.handleFormReset;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._handleFormReset=o,t._form=t._element.querySelector(".popup__container"),t._buttonSubmit=t._element.querySelector(".popup__btn"),t._inputList=t._element.querySelectorAll(".popup__input"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){I(P(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmitBtn.bind(this))}},{key:"_handleSubmitBtn",value:function(){this._handleFormSubmit(this._getInputValues())}},{key:"close",value:function(){I(P(a.prototype),"close",this).call(this),this._handleFormReset()}},{key:"resetForm",value:function(){this._form.reset()}},{key:"renderLoading",value:function(e){this._buttonSubmit.textContent=e?"Сохранение...":"Сохранить"}}])&&O(t.prototype,n),a}(m);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return(D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._element.querySelector(".popup__container"),t}return t=a,(n=[{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"setEventListeners",value:function(){var e=this;D(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}}])&&U(t.prototype,n),a}(m);function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=document.querySelector(t),this._career=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,career:this._career.textContent}}},{key:"setUserInfo",value:function(e){this._nameUser.textContent=e.name,this._career.textContent=e.about,this._avatar.src=e.avatar,this._id=e._id}},{key:"getUserId",value:function(){return console.log("test"),this._id}}])&&V(t.prototype,n),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n){var r=t.data,o=t.userId,i=t.handleCardClick,a=t.handleDeleteClick,c=t.likeAddTracker;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._like=r.likes.length,this._id=r._id,this._owner=r.owner._id,this._userId=o,this._cardSelector=n,this._handleCardClick=i,this._handleDeleteClick=a,this._likeAddTracker=c}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"getId",value:function(){return this._id}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".cards__photo"),this._likeCounter=this._element.querySelector(".cards__like-counter"),this._likeIcon=this._element.querySelector(".cards__like-btn"),this._deleteIcon=this._element.querySelector(".cards__remove-btn");var e=this._element.querySelector(".cards__title");return this._cardImage.src=this._link,this._cardImage.alt=this._name,e.textContent=this._name,this._likeCounter.textContent=this._like,this._setEventListeners(),this._element}},{key:"_checkLikeState",value:function(){return this._likeIcon.classList.contains("cards__like-btn_active")}},{key:"checkDeleteState",value:function(){this._owner!==this._userId&&this._deleteIcon.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeIcon.addEventListener("click",(function(){e._handleLikeClick()})),this._deleteIcon.addEventListener("click",(function(){e._handleDeleteClick()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick()}))}},{key:"_handleLikeClick",value:function(){this._likeAddTracker(this._checkLikeState())}},{key:"addLike",value:function(){this._likeIcon.classList.add("cards__like-btn_active"),this._likeCounter.textContent=++this._like}},{key:"removeLike",value:function(){this._likeIcon.classList.remove("cards__like-btn_active"),this._likeCounter.textContent=--this._like}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}}])&&N(t.prototype,n),e}();function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new d(l,u);M.enableValidation();var $=new d(l,i);$.enableValidation();var G=new d(l,s);G.enableValidation();var K=new F(".popup_type_delete-image");K.setEventListeners();var Q=new z(".user-info__name",".user-info__career",".user-info__user-photo"),W=new w(".popup_type_show-image");W.setEventListeners();var X=function(e){var t=new J({data:e,userId:function(){},handleCardClick:function(){W.open(e)},handleDeleteClick:function(){K.open(),K.setSubmitAction((function(){Z.removeCard(t.getId()).then((function(){t.deleteCard(),K.close()})).catch((function(e){return console.log("Ошибка ".concat(e))}))}))},likeAddTracker:function(e){e?Z.removeLike(t.getId()).then(t.removeLike()).catch((function(e){return console.log("Ошибка ".concat(e," при удалении лайка"))})):Z.doLike(t.getId()).then(t.addLike()).catch((function(e){return console.log("Ошибка ".concat(e," при отправке лайка"))}))}},".cards__container");return t.generateCard()},Y=new y({renderer:function(e){Y.insertElementAppend(X(e))}},".cards"),Z=new h({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"a725ec8a-f191-4a4f-b4ad-38c2f082c6d7","Content-Type":"application/json"}});Promise.all([Z.getUserData(),Z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q.setUserInfo(o),Y.renderElements(i)})).catch((function(){})),console.log(Q.getUserId());var ee=new T({popupSelector:".popup_type_user-info",handleFormSubmit:function(e){ee.renderLoading(!0),Z.updateUserData(e).then((function(e){console.log(e),Q.setUserInfo(e),ee.close()})).catch((function(e){return console.log("Ошибка при отправке информации о пользователе")})).finally((function(){ee.renderLoading(!1)}))},handleFormReset:function(){$.clearForm()}});ee.setEventListeners(),n.addEventListener("click",(function(){var e;e=Q.getUserInfo(),a.value=e.name,c.value=e.career,ee.open(),$.changeButtonState()}));var te=new T({popupSelector:".popup_type_add-image",handleFormReset:function(){M.clearForm()},handleFormSubmit:function(e){te.renderLoading(!0),Z.addNewCard(e).then((function(e){Y.insertElementPrepend(X(e))})).catch((function(e){return console.log("Ошибка ".concat(e," при создании карточки"))})).finally((function(){te.renderLoading(!1),te.close(),te.resetForm()}))}});te.setEventListeners(),r.addEventListener("click",(function(){te.open(),M.changeButtonState()}));var ne=new T({popupSelector:".popup_type_user-avatar",handleFormReset:function(){G.clearForm()},handleFormSubmit:function(e){ne.renderLoading(!0),Z.updateAvatar(e).then((function(e){t.src=e.avatar})).catch((function(e){return console.log("Ошибка при отправке аватара пользователя")})).finally((function(){ne.renderLoading(!1),ne.close(),ne.resetForm()}))}});ne.setEventListeners(),o.addEventListener("click",(function(){ne.open(),G.changeButtonState()}))})();
//# sourceMappingURL=main.js.map