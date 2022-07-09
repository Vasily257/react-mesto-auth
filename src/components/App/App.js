import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CardsContext } from '../../contexts/CardsContext';
import { SpinnerContext } from '../../contexts/SpinnerContext';

import Header from '../Header/Header';
import ProtectedRoute from '../HOC/ProtectedRoute';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Spinner from '../Spinner/Spinner';

import * as auth from '../../utils/auth';

function App() {
  const [cards, setCards] = useState([]);
  const [isSpinnerShown, setIsSpinnerShown] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const [userData, setUserData] = useState({ username: '', email: '' });

  const navigate = useNavigate();

  useEffect(() => {}, []);

  function onRegister({ email, password }) {
    auth
      .register({ email, password })
      .then((data) => {
        if (data) {
          setUserData({ username: data._id, email: email });
          setLoggedIn(true);
          navigate('/sign-in');
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="page index-page">
      <SpinnerContext.Provider value={{ isSpinnerShown, setIsSpinnerShown }}>
        <Header />

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
            <Route path="/sign-in" element={<Login />} />
            <Route path="*" element={<div>Страница не найдена. Код 404</div>} />
          </Routes>
        </CardsContext.Provider>

        <Spinner isOpen={isSpinnerShown} />
      </SpinnerContext.Provider>
    </div>
  );
}

export default App;
