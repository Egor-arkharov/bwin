'use strict';

(function () {

  let EvtKeys = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
  };

  let playBtn = document.querySelector('.call__button');
  let popupOpen = document.querySelector('.footer__rules');
  let popup = document.querySelector('.popup');
  let popupClose = popup.querySelector('.popup__close');

  playBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    console.log('Button clicked');
  })

  let onPopupEscPress = function (evt) {
    if (evt.key === EvtKeys.ESCAPE) {
      evt.preventDefault();
      closePopup();
    }
  };

  let openPopup = function () {
    popup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  let closePopup = function () {
    popup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  popupOpen.addEventListener('click', openPopup);

  popupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === EvtKeys.ENTER) {
      openPopup();
    }
  });

  popupClose.addEventListener('click', closePopup);

  popupClose.addEventListener('keydown', function (evt) {
    if (evt.key === EvtKeys.ESCAPE) {
      closePopup();
    }
  });
})();
