import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profile/Ssong'>Ssong 프로필</Link>
        </li>
        <li>
          <Link to='/profile/JY'>JY 프로필</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:username' element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
