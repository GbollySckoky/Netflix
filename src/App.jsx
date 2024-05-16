import React, { useEffect, useState } from 'react'
import HomeScreen from './components/HomeScreen/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/SignUp/Login'
import { auth } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/User/UserSlice'
import Profile from './components/Profile/Profile'

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
            <Route path='' element={<Login />} />
          ) : (
            <>
              <Route path="/" element={<HomeScreen />} />
              <Route path='/profile' element={<Profile user={user} />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
