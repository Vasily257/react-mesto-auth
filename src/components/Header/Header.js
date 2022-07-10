import headerLogo from '../../images/header/logo.svg';
import { Routes, Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="index-page__section header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип сайта «Место»"
      />
      <Routes>
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
