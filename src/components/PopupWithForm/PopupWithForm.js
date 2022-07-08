export default function PopupWithForm({
  name,
  title,
  submitButtonText,
  isOpen,
  isPopup,
  isRegisterForm,
  onClose,
  onSubmit,
  onReset,
  isValid,
  children,
}) {
  function closeAndResetPopup() {
    onClose();
    onReset();
  }

  return (
    <div
      className={`popup popup_type_${name} ${isOpen && 'popup_opened'} ${
        !isPopup && 'popup_not-popup'
      }`}
      onClick={(event) => {
        if (isPopup)
          event.target === event.currentTarget && closeAndResetPopup();
      }}
    >
      <div
        className={`popup__container ${
          !isPopup && 'popup__container_not-popup'
        }`}
      >
        <h2 className={`popup__title ${!isPopup && 'popup__title_not-popup'}`}>
          {title}
        </h2>
        <form
          className={`popup__form popup__form_type_${name}`}
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button
            className={`button popup__submit-button ${
              !isValid && 'popup__submit-button_disabled'
            } ${!isPopup && 'popup_submit-button_not-popup'} `}
            type="submit"
            disabled={!isValid}
          >
            {submitButtonText}
          </button>
        </form>
        <button
          className={`${isPopup ? 'button popup__close-button' : 'hidden'}`}
          type="button"
          aria-label="Закрыть форму"
          onClick={closeAndResetPopup}
        ></button>
        {!isPopup && isRegisterForm && (
          <div className="popup__footer">
            <span className="popup__footer-text">Уже зарегистрированы?</span>
            <button className="button popup__footer-button">Войти</button>
          </div>
        )}
      </div>
    </div>
  );
}
