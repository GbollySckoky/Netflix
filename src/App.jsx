import React, { useEffect, useState } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Inputs/Login'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './features/User/UserSlice'

const App = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
        setUser(userAuth);
      } else {
        dispatch(logout());
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className='app'>
      <BrowserRouter >
        <Routes>
          {!user ? (
            <Route path='' element={<Login />} />
          ) : (
            <Route path="/" element={<HomeScreen />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
