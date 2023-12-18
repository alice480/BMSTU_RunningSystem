import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// custom components
import Registration from './containers/Registration.tsx';
import CreateEvent from './Events/CreateEvent.js';
import AboutEventPage from './Events/AboutEventPage.jsx';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import EventsPage from './pages/EventPage.js';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/Profile.jsx';
import ClubsPage from './Clubs/ClubsPage.js';
import CreateClub from './Clubs/CreateClub.js';

// import ProfilePage from './pages/ProfilePage.tsx';
// import ProfilePage from './pages/ProfilePage.tsx';
// import Login from './containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path='/events/:id' element={<EventPage/>}/> */}
        <Route path="/events" element={<EventsPage />} />
        <Route path='/events/event' element={<AboutEventPage />} />
        <Route path='/create_event' element={<CreateEvent />} />
        <Route path="/clubs" element={< ClubsPage />} />
        <Route path='/create_club' element={<CreateClub />} />
        {/* <Route path='/activate/:uid/:token' element= {<ActivationPage />}/> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;