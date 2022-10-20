
const showInputError = (formElement, inputElement, objList) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(objList.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(objList.errorClass);
};


const hideInputError = (formElement, inputElement, objList) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(objList.inputErrorClass);
  errorElement.classList.remove(objList.errorClass);
  errorElement.textContent = '';
};


const toggleButtonState = (inputList, buttonElement, objList) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(objList.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(objList.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

//-----------------------------------------------------------------------------------------------------------------------------

const isValid = (formElement, inputElement, objList) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, objList);
  } else {
    hideInputError(formElement, inputElement, objList);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//-----------------------------------------------------------------------------------------------------------------------------

const setEventListeners = (formElement, objList) => {

  const inputList = Array.from(formElement.querySelectorAll(objList.inputSelector));
  const buttonElement = formElement.querySelector(objList.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, objList)
      toggleButtonState(inputList, buttonElement, objList);
    });
  });
};

//-----------------------------------------------------------------------------------------------------------------------------

const enableValidation = (objList) => {

  const formList = Array.from(document.querySelectorAll(objList.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, objList);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
