import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CardsContext } from '../../contexts/CardsContext';
import { SpinnerContext } from '../../contexts/SpinnerContext';

import Header from '../Header/Header';
import ProtectedRoute from '../HOC/ProtectedRoute';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';

import Spinner from '../Spinner/Spinner';

function App() {
  const [cards, setCards] = useState([]);
  const [isSpinnerShown, setIsSpinnerShown] = useState(false);

  const [loggedIn, setLoggedIn] = useState(true);

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
