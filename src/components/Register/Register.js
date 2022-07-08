import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

import useForm from '../../hooks/useForm';

export default function Register({ isOpen, onRegister }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
    setIsValid,
  } = useForm({ email: '', password: '' });

  function handleSubmit(event) {
    event.preventDefault();
    onRegister({ email: values.email, password: values.password });
  }

  useEffect(() => {
    setValues({ email: '', password: '' });
    setIsValid(false);
  }, [setValues, setIsValid, isOpen]);

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      submitButtonText="Зарегистрироваться"
      isOpen={isOpen}
      isPopup={false}
      isRegisterForm={true}
      onSubmit={handleSubmit}
      onReset={resetForm}
      isValid={isValid}
    >
      <p className="popup__field">
        <label className="visually-hidden" htmlFor="place-input">
          Электронная почта
        </label>
        <input
          className="popup__input popup__input_place_up popup__input_not-popup"
          id="email-input"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          autoComplete="nothing"
          required
        />
        <span
          className={`popup__error ${
            errors.email && 'popup__error_active'
          } popup__error_not-popup`}
        >
          {errors.email}
        </span>
      </p>
      <p className="popup__field">
        <label className="visually-hidden" htmlFor="password-input">
          Пароль
        </label>
        <input
          className="popup__input popup__input_place_down popup__input_not-popup"
          id="password-input"
          type="password"
          name="password"
          placeholder="Пароль"
          value={values.link}
          onChange={handleChange}
          minLength="8"
          maxLength="32"
          required
        />
        <span
          className={`popup__error ${
            errors.password && 'popup__error_active'
          } popup__error_not-popup`}
        >
          {errors.password}
        </span>
      </p>
    </PopupWithForm>
  );
}
