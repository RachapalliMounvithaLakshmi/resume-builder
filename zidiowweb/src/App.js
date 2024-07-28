import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import ResumeCreation from './components/ResumeCreation';
import ResumePreview from './components/ResumePreview';
import './App.css'; // Assuming you have some global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Route for login page */}
          <Route path="/" element={<Login />} />
          
          {/* Route for signup page */}
          <Route path="/signup" element={<SignUp />} />
          
          {/* Route for profile page */}
          <Route path="/profile" element={<Profile />} />
          
          {/* Route for resume creation page */}
          <Route path="/resume-creation" element={<ResumeCreation />} />
          
          {/* Route for resume preview page */}
          <Route path="/resume-preview" element={<ResumePreview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
