import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/User/UserSlice'
// import Profile from './pages/Profile/Profile'
import HomePage from './pages/Home/HomePage'
import Settings from './pages/Settings/Settings'
import Security from './pages/Security/Security'

const App = () => {
  const [user, setUser] = useState(null)
  const dispatch = useDispatch();
  // const {user} = useSelector((state) => state.UserSlice)
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
        // setUser(null);
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
            <Route path='' element={<Security />} />
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path='/profile' element={<Settings user={user} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
