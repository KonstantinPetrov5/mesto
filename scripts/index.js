const popups = document.querySelectorAll('.popup');
const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const inputName = document.querySelector('.popup__input_form_name');
const inputJob = document.querySelector('.popup__input_form_job');
const inputDescription = document.querySelector('.popup__input_form_description');
const inputImg = document.querySelector('.popup__input_form_img');
const formProfile = document.querySelector('.popup__form_type_profile');
const formCard = document.querySelector('.popup__form_type_card');
const cardTemplate = document.querySelector('.template');
const elementsList = document.querySelector('.elements__list');
const popupImg = document.querySelector('.popup_type_img');
const popupPic = document.querySelector('.popup__img');
const popupDescription = document.querySelector('.popup__description');

//-----------------------------------------------------------------------------------------------------------------------------

function createCard(card) {
  const newCard = cardTemplate.content.cloneNode(true);
  const cardTitle = newCard.querySelector('.element__title');
  const cardImg =newCard.querySelector('.element__img');
  cardTitle.textContent = card.name;
  cardImg.src = card.link;
  cardImg.alt = card.name;

  const rmvBtn = newCard.querySelector('.element__rmv-btn');
  rmvBtn.addEventListener('click', (evt) => evt.target.closest('.element').remove());

  const likeBtn = newCard.querySelector('.element__like-btn');
  likeBtn.addEventListener('click', () => likeBtn.classList.toggle('element__like-btn_active'));

  cardImg.addEventListener('click', () => {
    popupPic.src = cardImg.src;
    popupPic.alt = cardImg.alt;
    popupDescription.textContent = cardTitle.textContent;
    openPopup(popupImg);
  });

  return newCard
}

function addCard(newCard) {
  elementsList.prepend(newCard);
}

initialCards.forEach(card => addCard(createCard(card)));


formProfile.addEventListener('submit', handleProfileFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const submitBtn = evt.target.querySelector('.popup__btn')
  const templateCard = {
    name: inputDescription.value,
    link: inputImg.value
  };

  addCard(createCard(templateCard));
  closePopup(popupCard);
  formCard.reset();
  submitBtn.classList.add('popup__btn_disabled');
  submitBtn.setAttribute('disabled', 'disabled')
}

formCard.addEventListener('submit', handleCardFormSubmit);

//-----------------------------------------------------------------------------------------------------------------------------

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeByEscape);
  popup.querySelector('form').reset(); // Эта строчка отностится ко всем попапам. Она очищает форму внутри.
}


editBtn.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile)
});
addBtn.addEventListener('click', () => openPopup(popupCard));

popups.forEach(e => {
  e.addEventListener('mousedown', e => {
    if (e.target.className === 'popup__close' || e.target === e.currentTarget) {
      closePopup(e.currentTarget)
    }
  })
});

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active')
    closePopup(openedPopup)
  }
}

//-----------------------------------------------------------------------------------------------------------------------------

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile)
}

