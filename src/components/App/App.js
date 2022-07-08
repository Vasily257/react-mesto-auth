import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CardsContext } from '../../contexts/CardsContext';
import { SpinnerContext } from '../../contexts/SpinnerContext';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';

import Spinner from '../Spinner/Spinner';

function App() {
  const [cards, setCards] = useState([]);
  const [isSpinnerShown, setIsSpinnerShown] = useState(false);

  const [headerText, setHeaderText] = useState({
    entrance: '',
    email: '',
    exit: '',
  });

  useEffect(() => {
    switch (window.location.pathname) {
      case '/sign-up':
        setHeaderText({
          entrance: 'Регистрация',
          email: '',
          exit: '',
        });
        break;
      case '/sign-in':
        setHeaderText({
          entrance: 'Войти',
          email: '',
          exit: '',
        });
        break;
      case '/':
        setHeaderText({
          entrance: '',
          email: 'добавить почту',
          exit: 'Выйти',
        });
        break;
      default:
        setHeaderText({
          entrance: '',
          email: '',
          exit: '',
        });
        break;
    }
  }, []);

  return (
    <div className="page index-page">
      <SpinnerContext.Provider value={{ isSpinnerShown, setIsSpinnerShown }}>
        <Header text={headerText} />

        <CardsContext.Provider value={{ cards, setCards }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sign-up"
              element={<Register isOpen={true} onLogin={{}} />}
            />
            <Route
              path="/sign-in"
              element={<Login isOpen={true} onRegister={{}} />}
            />
            <Route path="*" element={<div>Страница не найдена. Код 404</div>} />
          </Routes>
        </CardsContext.Provider>

        <Spinner isOpen={isSpinnerShown} />
      </SpinnerContext.Provider>
    </div>
  );
}

export default App;
