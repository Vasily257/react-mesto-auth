import headerLogo from '../../images/header/logo.svg';

export default function Header() {
  return (
    <header className="index-page__section header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="Логотип сайта «Место»"
      />
    </header>
  );
}
