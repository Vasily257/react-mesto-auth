import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CardsContext } from '../../contexts/CardsContext';
import { SpinnerContext } from '../../contexts/SpinnerContext';

import Header from '../Header/Header';
import ProtectedRoute from '../HOC/ProtectedRoute';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Spinner from '../Spinner/Spinner';

import * as auth from '../../utils/auth';

function App() {
  const [cards, setCards] = useState([]);
  const [isSpinnerShown, setIsSpinnerShown] = useState(false);

  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onRegister({ email, password }) {
    auth
      .register({ email, password })
      .then((data) => {
        if (data) {
          setIsRegistered(true);
          setInfoTooltipOpen(true);
          setEmail(data.email);
          navigate('/sign-in');
        }
      })
      .catch((error) => {
        setIsRegistered(false);
        setInfoTooltipOpen(true);
        console.log(error);
      });
  }

  function onLogin({ email, password }) {
    auth
      .authorize({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          navigate('/');
        }
      })
      .catch((error) => console.log(error));
  }

  function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      auth
        .getContent(token)
        .then((response) => {
          if (response) {
            setEmail(response.email);
            setLoggedIn(true);
            navigate('/', { replace: true });
          }
        })
        .catch((error) => console.log(error));
    }
  }

  // localStorage.removeItem('token');

  return (
    <div className="page index-page">
      <SpinnerContext.Provider value={{ isSpinnerShown, setIsSpinnerShown }}>
        <Header userEmail={email} />

        <CardsContext.Provider value={{ cards, setCards }}>
          <Routes>
            <Route
              path="/"
              element={<ProtectedRoute loggedIn={loggedIn} component={Home} />}
            ></Route>
            <Route
              path="/sign-up"
              element={<Register onRegister={onRegister} />}
            />
            <Route path="/sign-in" element={<Login onLogin={onLogin} />} />
            <Route path="*" element={<div>Страница не найдена. Код 404</div>} />
          </Routes>
        </CardsContext.Provider>

        <Spinner isOpen={isSpinnerShown} />
        <InfoTooltip
          isOpen={infoTooltipOpen}
          setInfoTooltipOpen={setInfoTooltipOpen}
          isRegistered={isRegistered}
        />
      </SpinnerContext.Provider>
    </div>
  );
}

export default App;
