const page = document.querySelector('.page');
const editBtn = page.querySelector('.profile__edit-btn');
const popup = page.querySelector('.popup');
const closePopup = popup.querySelector('.popup__close');
const popupBtn = popup.querySelector('.popup__btn');
let profileName = page.querySelector('.profile__name');
let profileJob = page.querySelector('.profile__job');
let popupName = popup.querySelector('.popup__input_name');
let popupJob = popup.querySelector('.popup__input_job');
let popupForm = popup.querySelector('.popup__form');

function popupToggle() {
  popup.classList.toggle('popup_active');
  page.classList.toggle('page_lock');
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
};

editBtn.addEventListener('click', popupToggle);
closePopup.addEventListener('click', popupToggle);

popup.addEventListener('click', function(event) {
   if (event.target === event.currentTarget) {
    popupToggle();
   } else {
    return;
   }
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  if (popupName.value.length && popupJob.value.length > 0) {
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    popupToggle()
  } else {
    alert('Поля ввода не могут быть пусты');
  }
};

popupForm.addEventListener('submit', formSubmitHandler);
