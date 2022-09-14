const editBtn = document.querySelector('.profile__edit-btn');
const addBtn = document.querySelector('.profile__add-btn');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const closeProfile = document.querySelector('.popup__close_type_profile');
const closeCard = document.querySelector('.popup__close_type_card');
const closeImg = document.querySelector('.popup__close_type_img');
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
const popupDescription = document.querySelector('.popup__description')

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
};

function addCard(newCard) {
  elementsList.prepend(newCard);
};

initialCards.forEach(card => addCard(createCard(card)));



formProfile.addEventListener('submit', profileSubmitHandler);

function cardSubmitHandler(evt) {
  evt.preventDefault();
  const templateCard = {
    name: inputDescription.value,
    link: inputImg.value
  };
  addCard(createCard(templateCard));
  closePopup(popupCard);
  formCard.reset();
};

formCard.addEventListener('submit', cardSubmitHandler);

//-----------------------------------------------------------------------------------------------------------------------------

function openPopup(popup) {
  if (popup === popupProfile) {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
  }
  popup.classList.add('popup_active');
};

function closePopup(popup) {
  popup.classList.remove('popup_active');
};

editBtn.addEventListener('click', () => openPopup(popupProfile));
addBtn.addEventListener('click', () => openPopup(popupCard));
closeProfile.addEventListener('click', () => closePopup(popupProfile));
closeCard.addEventListener('click', () => closePopup(popupCard));
closeImg.addEventListener('click', () => closePopup(popupImg));


//-----------------------------------------------------------------------------------------------------------------------------

function profileSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile)
};

//-----------------------------------------------------------------------------------------------------------------------------


// popup.addEventListener('click', function(event) {
//   if (event.target === event.currentTarget) {
//    popupToggle();
//   } else {
//    return;
//   }
// });
