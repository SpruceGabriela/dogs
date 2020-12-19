import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import User from './components/User/User';
import Photo from './components/Photo/Photo';

import { UserStorage } from './UserContext';

import ProtectedRoute from './helper/ProtectedRoute';
import './style/App.scss'
import UserProfile from './components/User/UserProfile';
import NotFound from './helper/NotFound/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="account/*" element={<User />} />
            <Route path="/photo/:id" element={<Photo />} />
            <Route path="/profile/:user" element={<UserProfile />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
