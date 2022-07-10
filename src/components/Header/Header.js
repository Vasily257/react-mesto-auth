import headerLogo from '../../images/header/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';

export default function Header({ userEmail, onLogout }) {
  return (
    <header className="index-page__section header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип сайта «Место»"
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <span className="header__email">{userEmail}</span>
              <Link
                to="/sign-in"
                className="button header__link header__link_out"
                onClick={onLogout}
              >
                Выйти
              </Link>
              <button
                className="button header__open-button"
                type="button"
                aria-label="Открыть меню профиля"
                onClick={{}}
              ></button>
              <button
                className="button header__close-button"
                type="button"
                aria-label="Закрыть меню профиля"
                onClick={{}}
              ></button>
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="button header__link">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="button header__link">
              Регистрация
            </Link>
          }
        />
      </Routes>
    </header>
  );
}
