//= modules/slider.js
//= modules/popup.js
//= modules/select.js
//= modules/infSlider.js


const slider = new Slider('slider', 'slider__list', 'slider__img', 'btnLeft', 'btnRight', 'slider__indicat', 300);

const sliderSpray = new Slider('purchase__cardSlide', 'sliderSpray__wrapper', 'sliderSpray__img', 'btnLeft', 'btnRight', null, 300);

const sliderPopup = new Slider('popup__slider', 'popup__list-check', 'popup__img', 'btnLeft', 'btnRight', null, 500);


const select = new SelectShoe('select', 'btnLeft', 'btnRight', 'select__cardSlide', 'cardBy__button-list', ['red', 'black']);

const myPopup = new Popup('popupRed', '.cardBy__img', 'popup-hide', 'cls', 'popup__slider', true);


const infSlider = new InfSlider('info__list', 'info__item', 'info__item-check', 'info__cont', 'slideInfo-vis');