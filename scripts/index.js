const page = document.querySelector('.page');
const editBtn = page.querySelector('.profile__edit-btn');
const popup = page.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const popupBtn = popup.querySelector('.popup__btn');
let profileName = page.querySelector('.profile__name');
let profileJob = page.querySelector('.profile__job');
let popupName = popup.querySelector('.popup__input_form_name');
let popupJob = popup.querySelector('.popup__input_form_job');
let popupForm = popup.querySelector('.popup__form');

function popupOpen() {
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
  popup.classList.add('popup_active');
};

function popupClose() {
  popup.classList.remove('popup_active');
};


editBtn.addEventListener('click', popupOpen);
closePopup.addEventListener('click', popupClose);


function formSubmitHandler (evt) {
  evt.preventDefault();
  if (popupName.value.length && popupJob.value.length > 0) {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    popupClose()
  } else {
    alert('Поля ввода не могут быть пусты');
  }
};

popupForm.addEventListener('submit', formSubmitHandler);
